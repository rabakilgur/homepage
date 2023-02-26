import gsap, { Power2 } from "gsap";

// Helper function to get a random value from [low, high]
const random = (low, high) => Math.random() * (high - low) + low;

export default class Visual {
	canvas: HTMLCanvasElement;
	context: CanvasRenderingContext2D;
	canvasWidth: number;
	canvasHeight: number;
	particleLength: number;
	particles: any[];
	particleMaxRadius: number;
	handleMouseMoveBind: any;
	handleResizeBind: any;

	constructor(canvas: HTMLCanvasElement) {
		this.canvas = canvas;
		this.context = this.canvas.getContext("2d");
		this.canvasWidth = 0;
		this.canvasHeight = 0;
		this.particleLength = 150;
		this.particles = [];
		this.particleMaxRadius = 8;

		this.handleMouseMoveBind = this.handleMouseMove.bind(this);
		this.handleResizeBind = this.handleResize.bind(this);

		this.initialize();
		this.render();
	}

	initialize() {
		this.resizeCanvas();
		for (let i = 0; i < this.particleLength; i++) {
			this.particles.push(this.createParticle(i));
		}
		this.bind();
	}

	bind() {
		document.body.addEventListener("mousemove", this.handleMouseMoveBind, false);
		window.addEventListener("resize", this.handleResizeBind, false);
	}

	unbind() {
		document.body.removeEventListener("mousemove", this.handleMouseMoveBind, false);
		window.removeEventListener("resize", this.handleResizeBind, false);
	}

	handleMouseMove(e: MouseEvent) {
		this.enlargeParticle(e.clientX, e.clientY + document.body.scrollTop);
	}

	handleResize() {
		this.resizeCanvas();
	}

	resizeCanvas() {
		this.canvasWidth = this.canvas.offsetWidth;
		this.canvasHeight = this.canvas.offsetHeight;
		this.canvas.width = this.canvasWidth * window.devicePixelRatio;
		this.canvas.height = this.canvasHeight * window.devicePixelRatio;
		this.context = this.canvas.getContext("2d");
		this.context.scale(window.devicePixelRatio, window.devicePixelRatio);
	}

	createParticle(id: number, isRecreate?: boolean) {
		const radius = random(1, this.particleMaxRadius);
		// const x = isRecreate ? - radius - random(this.particleMaxRadius * 2, this.canvasWidth) : random(0, this.canvasWidth);
		const x = isRecreate ? 0 - radius : random(0, this.canvasWidth);
		let y = random(this.canvasHeight / 2 - 150, this.canvasHeight / 2 + 150);
		y += random(-100, 100);
		y = Math.min(y, this.canvasHeight - 200 - 48 );  // canvasHeight - max_amplitude - max_inflated_radius
		const alpha = random(0.05, 1);

		return {
			id: id,
			x: x,
			y: y,
			startY: y,
			radius: radius,
			defaultRadius: radius,
			startAngle: 0,
			endAngle: Math.PI * 2,
			alpha: alpha,
			color: { r: 0, g: random(70, 180), b: 255 },
			speed: (alpha + 1) * 0.2,
			amplitude: random(50, 200),
			isBurst: false
		};
	}

	drawParticles() {
		this.particles.forEach(particle => {
			this.moveParticle(particle);

			this.context.beginPath();
			this.context.fillStyle = `rgba(${particle.color.r}, ${particle.color.g}, ${particle.color.b}, ${particle.alpha})`;
			this.context.arc(particle.x, particle.y, particle.radius, particle.startAngle, particle.endAngle);
			this.context.fill();
		});
	}

	moveParticle(particle) {
		particle.x += particle.speed;
		particle.y = particle.startY + particle.amplitude * Math.sin(((particle.x / 5) * Math.PI) / 180);
	}

	enlargeParticle(clientX, clientY) {
		this.particles.forEach(particle => {
			if (particle.isBurst) return;

			const distance = Math.hypot(particle.x - clientX, particle.y - clientY);

			if (distance <= 100) {
				// const scaling = (100 - distance) / 2.5;
				const scaling = (100 - distance) / 4;
				gsap.to(particle, {
					radius: particle.defaultRadius + scaling,
					ease: Power2.easeOut,
					duration: 0.5
				});
			} else {
				gsap.to(particle, {
					radius: particle.defaultRadius,
					ease: Power2.easeOut,
					duration: 0.5
				});
			}
		});
	}

	render() {
		// canvas
		this.context.clearRect(0, 0, this.canvasWidth + this.particleMaxRadius * 2, this.canvasHeight);

		// draw particle
		this.drawParticles();

		// create particles
		this.particles.forEach(particle => {
			if (particle.x - particle.radius >= this.canvasWidth) {
				this.particles[particle.id] = this.createParticle(particle.id, true);
			}
		});
		requestAnimationFrame(this.render.bind(this));
	}
}
