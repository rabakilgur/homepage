import { useEffect, useRef } from "preact/hooks";
import Visual from "./Visual";

export default function ParticleWave() {
	const canvasRef = useRef<HTMLCanvasElement | null>(null);

	useEffect(() => {
		new Visual(canvasRef.current!);
	}, []);

	return (
		<canvas
			ref={canvasRef}
			style={{
				position: "absolute",
				zIndex: 1,
				display: "block",
				width: "100%",
				height: "80vh",
				minHeight: "400px",
			}}
		></canvas>
	);
}
