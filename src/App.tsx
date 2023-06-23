import { render } from "preact";
import { NextUIProvider } from "@nextui-org/system";
import Homepage from "./components/Homepage/Homepage";

render(
	<NextUIProvider locale="de-DE">
		<Homepage />
	</NextUIProvider>,
	document.getElementById("app")!
);
