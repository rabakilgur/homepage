import { h } from "preact";
import { createTheme, globalCss, NextUIProvider } from "@nextui-org/react";
import Homepage from "./Homepage/Homepage";
import useDarkMode from "../vendor/hooks/useDarkMode";

// const globalStyles = globalCss({ });

const sharedTheme = {
	fonts: {
		sans: "Verdana, sans-serif, Arial;"
	}
};

const darkTheme = createTheme({
	type: "dark",
	theme: {
		...sharedTheme,
		colors: {
			secondaryLight: "$gray100",
			secondaryLightHover: "$gray200",
			secondaryLightActive: "$gray300",
			secondaryLightContrast: "$gray500",
			secondary: "#43484C",
			secondaryBorder: "$gray400",
			secondaryBorderHover: "$gray500",
			secondarySolidHover: "$gray600",
			secondarySolidContrast: "$white",
			secondaryShadow: "$gray400",
		},
	}
});

const lightTheme = createTheme({
	type: "light",
	theme: {
		...sharedTheme,
		colors: {
			secondaryLight: "$gray200",
			secondaryLightHover: "$gray300",
			secondaryLightActive: "$gray400",
			secondaryLightContrast: "$gray600",
			secondary: "#A5ACB2",
			secondaryBorder: "$gray500",
			secondaryBorderHover: "$gray600",
			secondarySolidHover: "$gray700",
			secondarySolidContrast: "$white",
			secondaryShadow: "$gray500",
		},
	}
});

const App = () => {
	const darkMode = useDarkMode(false);

	return (
		<div id="app">
			<NextUIProvider theme={darkMode.value ? darkTheme : lightTheme} disableBaseline>
				{/* {globalStyles()} */}
				<Homepage />
			</NextUIProvider>
		</div>
	);
};
export default App;
