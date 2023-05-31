import { Fragment, h } from "preact";
import S from "./ColorBlob.module.scss";

export default function ColorBlob({
	color,
	size,
	top,
	right,
	bottom,
	left
}: {
	color: string,
	size: number,
	top?: string,
	right?: string,
	bottom?: string,
	left?: string
}) {
	return (
		<div
			className={S.colorBlob}
			style={`
				--color: ${color};
				--size: ${size};
				--top: ${top};
				--right: ${right};
				--bottom: ${bottom};
				--left: ${left}
			`}
		></div>
	);
}
