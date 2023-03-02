import { h } from "preact";
import { Button } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import useDarkMode from "../../vendor/hooks/useDarkMode";

export default function DarkModeToggle(props) {
	const darkMode = useDarkMode(false);

	return (
		<Button
			onClick={darkMode.toggle}
			auto
			light
			style={{
				...props.style,
				aspectRatio: "1",
				fontSize: "1.4em",
			}}
		>
			{darkMode.value ? <FontAwesomeIcon icon={faSun} /> : <FontAwesomeIcon icon={faMoon} />}
		</Button>
	);
}
