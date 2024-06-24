import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import Tooltip from "../Tooltip/Tooltip";
import useDarkMode from "../../vendor/hooks/useDarkMode";
import S from "./CornerButtonWrapper.module.scss";
import CVWrapper from "../CVWrapper/CVWrapper";

export default function CornerButtonWrapper() {
	const { value: isDark } = useDarkMode();

	return (
		<div className={S.wrapper}>
			<Tooltip tt="CV / Lebenslauf anzeigen" placement="bottom">
				<CVWrapper className={S.toggle} label="CV" />
			</Tooltip>
			<Tooltip tt={isDark ? "Zu Light Mode wechseln" : "Zu Dark Mode wechseln"} placement="bottom-end">
				<DarkModeToggle className={S.toggle} />
			</Tooltip>
		</div>
	);
}
