import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import Tooltip from "../Tooltip/Tooltip";
import useDarkMode from "../../vendor/hooks/useDarkMode";
import S from "./DarkModeToggleCornerWrapper.module.scss";

export default function DarkModeToggleCornerWrapper() {
	const { value: isDark } = useDarkMode();

	return (
		<div className={S.wrapper}>
			<Tooltip tt={isDark ? "Zu Light Mode wechseln" : "Zu Dark Mode wechseln"} placement="left">
				<DarkModeToggle style={{
					backgroundColor: "hsl(var(--nextui-default-300) / 0.5)",
					backdropFilter: "blur(12px)",
				}} />
			</Tooltip>
		</div>
	);
}
