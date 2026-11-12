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
				darkpurple: "#EAE4FE",
				lavender: "#EAE4FE",
				cream: "#292538",
				surface: "#383248",
				"project-card": "#494157",
				"hero-glass": "#41374F",
				main: "#F0EAF8",
				muted: "#D2CBE0",
				brand: "#6C49B8",
				"tech-blue": "#3460B7",
				navy: "#1F2A44",
				darkgray: "#1F2A44",
			},
		},
	},
	plugins: [],
};

