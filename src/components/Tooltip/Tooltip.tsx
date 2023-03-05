import { Fragment, h } from "preact";
import { useEffect, useState } from "preact/hooks";
import { createPortal } from "preact/compat";
import C from "classnames";
import { usePopperTooltip } from "react-popper-tooltip";
import S from "./Tooltip.module.scss";

export default function Tooltip({
	tt,
	placement = "top",
	delay,
	distance,
	...props
}: {
	tt: string | JSX.Element,
	placement?: "auto" | "auto-start" | "auto-end" | "top" | "top-start" | "top-end" | "bottom" | "bottom-start" | "bottom-end" | "right" | "right-start" | "right-end" | "left" | "left-start" | "left-end",
	delay?: number,
	distance?: number,
	[props: string]: any
}) {
	const [rendered, setRendered] = useState(false);
	const [actuallyVisible, setActuallyVisible] = useState(false);
	const {
		getArrowProps,
		getTooltipProps,
		setTooltipRef,
		setTriggerRef,
		visible,
	} = usePopperTooltip({
		placement: placement,
		// visible: true,
		// interactive: true,
	},
	{
		modifiers: [
			{
				name: "preventOverflow",
				options: {
					altAxis: true,
					padding: {
						top: 4,
						right: 13,
						bottom: 4,
						left: 4,
					},
				},
			},
			{
				name: "offset",
				options: {
					offset: [0, distance ?? 6],
				},
			},
		],
	});

	useEffect(() => {
		let renderedTimeout, actuallyVisibleTimeout;
		if (visible) {
			setRendered(true);
			actuallyVisibleTimeout = setTimeout(() => setActuallyVisible(true), Math.max(delay ?? 100, 1));
		} else {
				setActuallyVisible(false);
			renderedTimeout = setTimeout(() => requestIdleCallback(() => setRendered(false)), 500);
		}
		return () => {
			clearTimeout(renderedTimeout);
			clearTimeout(actuallyVisibleTimeout);
		}
	}, [visible]);

	if (tt === "") return props.children;

	return (<>
		<div ref={setTriggerRef}>
			{props.children}
		</div>
		{(typeof window !== "undefined") && rendered && createPortal(
			<div className={C(S.wrapper, actuallyVisible && S.visible)} data-tt-placement={placement}>
				<div
					ref={setTooltipRef}
					{...getTooltipProps({ className: S.container })}
				>
					<div {...getArrowProps({ className: S.arrow })} />
					{tt}
				</div>
			</div>
		, document.body)}
	</>);
}
