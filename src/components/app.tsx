import { h } from "preact";

import Header from "./header";

// Code-splitting is automated for `routes` directory
import Home from "../routes/home";

const App = () => (
	<div id="app">
		<Header />
		<main>
			<Home />
		</main>
	</div>
);

export default App;
