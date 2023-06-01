import { h } from "preact";
import { Button, useTheme } from "@nextui-org/react";
import { HiSun } from "react-icons/hi";
import { HiMoon } from "react-icons/hi2";
import useDarkMode from "../../vendor/hooks/useDarkMode";

export default function DarkModeToggle(props) {
	const darkMode = useDarkMode(false);
	const { isDark } = useTheme();

	return (
		<Button
			aria-label="Dark Mode Toggle"
			onPress={darkMode.toggle}
			auto
			light
			style={{
				...props.style,
				aspectRatio: "1",
				fontSize: "1.4em",
			}}
		>
			{isDark ? <HiSun /> : <HiMoon />}
		</Button>
	);
}
