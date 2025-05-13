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
				darkpurple: "#6b21a8",
				lavender: "#CBB7E2",
				cream: "#FAF3E0",
				emerald: "#10B981",
				darkgray: "#1F2937",
			},
		},
	},
	plugins: [],
};

