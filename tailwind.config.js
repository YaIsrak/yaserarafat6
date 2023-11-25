<<<<<<< HEAD
module.exports = {
	prefix: 'tw-',
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		'./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
	],

	theme: {
		extend: {
			colors: {
				light: '#ffdfbf',
				dark: '#0e0e0e',
				primary: '#cc6448',
			},
		},
	},
	plugins: [],
	darkMode: 'class',
=======
/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/components/pages/*.js', './src/components/*.{html,js}'],
	theme: {
		extend: {},
	},
	plugins: [],
>>>>>>> f47877dac4c17814ecfc1dc8bc92d5bb07fb6705
};
