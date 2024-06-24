import S from "./ColorBlob.module.scss";

export default function ColorBlob({ color, size, top, right, bottom, left }: { color: string; size: number; top?: string; right?: string; bottom?: string; left?: string }) {
	// It's now pretty, but we need to nest these elements and apply a 100px blur in layers because Firefox caps blur filters at 100px (when softare rendering)
	return (
		<div
			className={S.wrapper}
			style={`
				--color: ${color};
				--size: ${size};
				--top: ${top};
				--right: ${right};
				--bottom: ${bottom};
				--left: ${left}
			`}>
			<div className={S.inner}>
				<div className={S.inner}>
					<div className={S.inner}>
						<div className={S.inner}>
							<div className={S.blob}></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
