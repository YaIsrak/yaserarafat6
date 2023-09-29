/** @type {import('tailwindcss').Config} */
module.exports = {
	prefix: 'tw-',
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		'./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
	],

	theme: {
		extend: {},
	},
	plugins: [],
	darkMode: 'class',
};
