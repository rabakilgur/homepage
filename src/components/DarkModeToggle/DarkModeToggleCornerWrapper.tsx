import { useTheme } from "@nextui-org/react";
import { Fragment, h } from "preact";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import Tooltip from "../Tooltip/Tooltip";
import S from "./DarkModeToggleCornerWrapper.module.scss";

export default function DarkModeToggleCornerWrapper() {
	const { theme, type, isDark } = useTheme();

	return (
		<div className={S.wrapper}>
			<Tooltip tt={isDark ? "Zu Light Mode wechseln" : "Zu Dark Mode wechseln"} placement="left">
				<DarkModeToggle />
			</Tooltip>
		</div>
	);
}
