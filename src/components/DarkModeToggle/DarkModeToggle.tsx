import { Button } from "@nextui-org/button";
import { HiSun } from "react-icons/hi";
import { HiMoon } from "react-icons/hi2";
import useDarkMode from "../../vendor/hooks/useDarkMode";

export default function DarkModeToggle(
	{ style, ...props }:
	{ style?: any, [prop: string]: any }
) {
	const darkMode = useDarkMode(false);

	return (
		<Button
			aria-label="Dark/Light Mode Toggle"
			onPress={darkMode.toggle}
			isIconOnly
			style={{
				...style,
				fontSize: "1.4em",
			}}
			{...props}
		>
			{darkMode.value ? <HiSun /> : <HiMoon />}
		</Button>
	);
}
