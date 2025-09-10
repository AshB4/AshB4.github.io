/** @type {import('tailwindcss').Config} */

export default {
	content: ["./index.html", "./src/**/*.{js,jsx}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Inter", "ui-sans-serif", "system-ui"],
				serif: ["Merriweather", "ui-serif"],
			},
			colors: {
				darkpurple: "#4E2D9B",
				lavender: "#EAE4FE",
				cream: "#FAF3E0",
				navy: "#1F2A44",
				darkgray: "#1F2937",
			},
		},
	},
	plugins: [],
};

