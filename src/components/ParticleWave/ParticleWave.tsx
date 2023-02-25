import { h } from "preact";
// import { useEffect, useRef } from "react";
import { useEffect, useRef } from "preact/hooks";
import { styled } from "@nextui-org/react";
import Visual from "./Visual";

const Canvas = styled("canvas", {
	position: "absolute",
	zIndex: 1,
	display: "block",
	width: "100%",
	height: "80vh",
	minHeight: "400px",
});

export default function ParticleWave() {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	useEffect(() => {
		new Visual(canvasRef.current);
	}, []);
	return <Canvas ref={canvasRef}></Canvas>;
}
