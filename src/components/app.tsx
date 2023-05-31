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
	}
});

const lightTheme = createTheme({
	type: "light",
	theme: {
		...sharedTheme,
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
