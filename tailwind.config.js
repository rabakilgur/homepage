const { nextui } = require("@nextui-org/theme");
import { commonColors, semanticColors } from "@nextui-org/theme";

const myCommonColors = {
	blue: {
		"50":  "#E6F9FF",
		"100": "#CCF2FF",
		"200": "#99DFFF",
		"300": "#66C7FF",
		"400": "#3FAFFF",
		"500": "#0088FF",
		"600": "#0069DB",
		"700": "#004EB7",
		"800": "#003793",
		"900": "#00277A",
		"950": "#00143D",
	},
	green: {
		"50":  "#E5FDE4",
		"100": "#CAFBC9",
		"200": "#94F89D",
		"300": "#5DEA77",
		"400": "#35D562",
		"500": "#00BA47",
		"600": "#009F4C",
		"700": "#00854D",
		"800": "#006B49",
		"900": "#005945",
		"950": "#002D23",
	},
	yellow: {
		"50":  "#FFFBEC",
		"100": "#FEF7D9",
		"200": "#FDEDB3",
		"300": "#FBDF8C",
		"400": "#F7D06F",
		"500": "#F3BA41",
		"600": "#D0972F",
		"700": "#AE7820",
		"800": "#8C5A14",
		"900": "#74450C",
		"950": "#3A2306",
	},
	red: {
		"50":  "#FFF3EB",
		"100": "#FEE6D7",
		"200": "#FDC7B0",
		"300": "#FAA087",
		"400": "#F57B69",
		"500": "#EF4239",
		"600": "#CD292F",
		"700": "#AC1C2D",
		"800": "#8A122A",
		"900": "#720A28",
		"950": "#390514",
	},
};
const mySemanticColors = {
	primary: "blue",
	success: "green",
	warning: "yellow",
	danger: "red",
};

// Generate the dark counterparts to the colors above:
const lightToDarkKeyMap = {
	"50":  "950",
	"100": "900",
	"200": "800",
	"300": "700",
	"400": "600",
	"500": "500",
	"600": "400",
	"700": "300",
	"800": "200",
	"900": "100",
	"950": "50",
	"DEFAULT": "DEFAULT",
	"foreground": "foreground",
};
const myCommonColorsThemed = {
	light: myCommonColors,
	dark: {},
};
Object.keys(myCommonColors).forEach((colorName) => {
	myCommonColorsThemed["light"][colorName]["DEFAULT"] = myCommonColorsThemed["light"][colorName]["500"];
	myCommonColorsThemed["light"][colorName]["foreground"] = "#ffffff";
	myCommonColorsThemed["dark"][colorName] = {
		"DEFAULT": myCommonColorsThemed["light"][colorName]["500"],
		"foreground": "#ffffff",
	};
	Object.keys(myCommonColors[colorName]).forEach((colorSubType) => {
		 myCommonColorsThemed["dark"][colorName][colorSubType] = myCommonColors[colorName][lightToDarkKeyMap[colorSubType]];
	});
});
const mySemanticColorsThemed = {
	light: {},
	dark: {},
};
Object.keys(mySemanticColors).forEach((colorName) => {
	mySemanticColorsThemed["light"][colorName] = myCommonColorsThemed["light"][mySemanticColors[colorName]];
	mySemanticColorsThemed["dark"][colorName] = myCommonColorsThemed["dark"][mySemanticColors[colorName]];
});

/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
		"./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Verdana", "sans-serif"],
			},
		},
	},
	darkMode: "class",
	plugins: [nextui({
		themes: {
			light: {
				...myCommonColorsThemed.light,
				...mySemanticColorsThemed.light,
				secondary: semanticColors.light.default,
				gray: semanticColors.light.default,
				backgroundContrast: {
					"DEFAULT": semanticColors.light.default["50"],
				},
			},
			dark: {
				...myCommonColorsThemed.dark,
				...mySemanticColorsThemed.dark,
				secondary: semanticColors.dark.default,
				gray: semanticColors.dark.default,
				backgroundContrast: {
					"DEFAULT": semanticColors.dark.default["100"],
				},
			},
		},
	})],
}
