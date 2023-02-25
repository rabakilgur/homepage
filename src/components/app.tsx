import { h } from "preact";
import { NextUIProvider } from "@nextui-org/react";
import Homepage from "./Homepage/Homepage";

const App = () => (
	<div id="app">
		<NextUIProvider>
			<Homepage />
		</NextUIProvider>
	</div>
);
export default App;
