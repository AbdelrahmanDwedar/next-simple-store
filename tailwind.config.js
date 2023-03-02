/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js, ts, jsx, tsx}",
		"./components/**/*.{js, ts, jsx, tsx}",
	],
	theme: {
		colors: {
			black: "black",
			grey: "grey",
			primary: "#4646fc",
			danger: "#F00",
			muted: "#00000095",
		},
		extend: {},
	},
	plugins: [],
};
