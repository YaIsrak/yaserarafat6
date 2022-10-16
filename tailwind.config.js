/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		// './pages/*.{js,jsx}',
		// './pages/**/*.{js,jsx}',
		// './pages/**/**/*.{js,jsx}',
		// './pages/**/**/**/*.{js,jsx}',
		// './components/*.{jsx,js}',
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {},
	},
	plugins: [],
};
