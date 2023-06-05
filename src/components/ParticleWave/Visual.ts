import gsap, { Power2 } from "gsap";
import isMobile from "../../lib/helper/isMobileHelpers";
import { debounce, throttle } from "../../lib/helper/functionHelpers";

type Particle = {
	id: number;
	x: number;
	y: number;
	startY: number;
	radius: number;
	defaultRadius: number;
	startAngle: number;
	endAngle: number;
	alpha: number;
	color: {
		 r: number;
		 g: number;
		 b: number;
	};
	speed: number;
	amplitude: number;
	isBurst: boolean;
};

// Helper function to get a random value from [low, high]
const random = (low: number, high: number) => Math.random() * (high - low) + low;

// Squeezes the sinus curve. Smaller values squeeze more.
const sinSqueeze = isMobile ? 3 : 5;

export default class Visual {
	canvas: HTMLCanvasElement;
	context: CanvasRenderingContext2D;
	canvasWidth: number;
	canvasHeight: number;
	particleCount: number;
	particles: Particle[];
	particleMinRadius: number;
	particleMaxRadius: number;
	handleMouseMoveBind: typeof this.handleMouseMove;
	handleResizeBind: typeof this.handleResize;
	lastFrameTimestamp: DOMHighResTimeStamp;

	constructor(canvas: HTMLCanvasElement) {
		this.canvas = canvas;
		this.context = this.canvas.getContext("2d");
		this.canvasWidth = 0;
		this.canvasHeight = 0;
		this.particleCount = isMobile ? 35 : 90;
		this.particles = [];
		this.particleMinRadius = 2;
		this.particleMaxRadius = 10;

		this.handleMouseMoveBind = throttle((e: MouseEvent) => this.handleMouseMove.bind(this)(e), 100, "visualHandleMouseMove");
		this.handleResizeBind = debounce(() => this.handleResize.bind(this)(), 200, "visualHandleMouseMove");

		this.initialize();
		this.render(0);
	}

	initialize() {
		this.resizeCanvas();
		for (let i = 0; i < this.particleCount; i++) {
			this.particles.push(this.createParticle(i));
		}
		this.bind();
	}

	bind() { // TODO: debounce this
		document.body.addEventListener("mousemove", this.handleMouseMoveBind, false);
		window.addEventListener("resize", this.handleResizeBind, false);
	}

	unbind() {
		document.body.removeEventListener("mousemove", this.handleMouseMoveBind, false);
		window.removeEventListener("resize", this.handleResizeBind, false);
	}

	handleMouseMove(e: MouseEvent) {
		if (!isMobile) this.enlargeParticle(e.clientX, e.clientY + document.body.scrollTop);
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
		const radius = random(this.particleMinRadius, this.particleMaxRadius);
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
			speed: (alpha + 1) * 0.15,
			amplitude: random(50, 200),
			isBurst: false
		};
	}

	drawParticles(tslf: DOMHighResTimeStamp) {
		this.particles.forEach(particle => {
			this.moveParticle(particle, tslf);

			this.context.beginPath();
			this.context.fillStyle = `rgba(${particle.color.r}, ${particle.color.g}, ${particle.color.b}, ${particle.alpha})`;
			this.context.arc(particle.x, particle.y, particle.radius, particle.startAngle, particle.endAngle);
			this.context.fill();
		});
	}

	moveParticle(particle: Particle, tslf: DOMHighResTimeStamp) {
		particle.x += particle.speed * tslf / 6;
		particle.y = particle.startY + particle.amplitude * Math.sin(((particle.x / sinSqueeze) * Math.PI) / 180);
	}

	enlargeParticle(clientX: number, clientY: number) {
		if (clientY < this.canvasHeight + 100) {
			this.particles.forEach(particle => {
				if (particle.isBurst) return;

				const distance = Math.hypot(particle.x - clientX, particle.y - clientY);

				if (distance <= 100) {
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
	}

	renderSkipFrame(timestamp: DOMHighResTimeStamp) {
		// Calculate next frame (which actually renders):
		requestAnimationFrame(this.render.bind(this));
	}

	render(timestamp: DOMHighResTimeStamp) {
		if (!this.lastFrameTimestamp) this.lastFrameTimestamp = timestamp;
		let tslf = timestamp - this.lastFrameTimestamp; // elapsed time in ms since last frame

		if (document.body.scrollTop < this.canvasHeight) {
			// Clear the canvas:
			this.context.clearRect(0, 0, this.canvasWidth + this.particleMaxRadius * 2, this.canvasHeight);

			// Draw/update particles:
			this.drawParticles(tslf);

			// Recreate particles that moved off the screen:
			const mustRedrawAll = this.particles.reduce((progress, particle) => progress && (particle.x - particle.radius >= this.canvasWidth), true);
			this.particles.forEach(particle => {
				if (particle.x - particle.radius >= this.canvasWidth) {
					this.particles[particle.id] = this.createParticle(particle.id, !mustRedrawAll);
				}
			});
		}

		this.lastFrameTimestamp = timestamp;

		// Calculate next frame (which does nothing):
		requestAnimationFrame(this.renderSkipFrame.bind(this));
	}
}
