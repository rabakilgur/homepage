import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import { CssBaseline } from "@nextui-org/react";

class MyDocument extends Document {
	static async getInitialProps(ctx: any) {
		const initialProps = await Document.getInitialProps(ctx);
		return {
			...initialProps,
			styles: React.Children.toArray([initialProps.styles])
		};
	}

	render() {
		return (
			<Html lang="de">
				<Head>
					{CssBaseline.flush()}
					<link rel="stylesheet" href="include/font_library/font_Voces.css" type="text/css" />{/* TODO include in this project import instead */}
					<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans" />
					<link rel="stylesheet" href="https://www.robin-garbe.de/include/css_library/click.css" type="text/css" />{/* TODO include in this project import instead */}
					<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" type="text/css" />
					<link rel="stylesheet" href="https://www.robin-garbe.de/include/css_library/design-variables.css" />{/* TODO remove */}
					<link rel="stylesheet" href="https://www.robin-garbe.de/include/css_library/design.css" />{/* TODO remove */}
					<link rel="stylesheet" href="https://www.robin-garbe.de/style/whatido.css" type="text/css" />{/* TODO include in this project import instead */}
					<link rel="stylesheet" href="https://www.robin-garbe.de/style/project_cards.css" type="text/css" />{/* TODO use in the dedicated component */}
					<link rel="stylesheet" href="https://www.robin-garbe.de/style/dist/timeline.min.css" type="text/css" />{/* TODO include in this project import instead */}
					{/* TODO add phone-/tablet-only style */}
					<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
					<script src="https://cdn.jsdelivr.net/npm/gsap@3.0.1/dist/gsap.min.js"></script>{/* TODO import using npm instead */}
					<script src="https://cdnjs.cloudflare.com/ajax/libs/Clamp.js/0.5.1/clamp.min.js"></script>{/* TODO import using npm instead */}
					<script src="https://robin-garbe.de/include/js_library/CircleOnClickEffect.js"></script>{/* TODO include in this project and import instead */}
					<script type="module" src="./w/between/between-logo.js"></script>{/* TODO include in this project and import instead */}
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
export default MyDocument;
