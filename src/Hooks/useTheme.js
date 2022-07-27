import { useState } from 'react';

export default function useTheme() {
	const themeObject = {
		light: {
			bg: 'white',
			text: 'dark',
			string: '🌙 Dark',
		},
		dark: {
			bg: 'dark',
			text: 'white',
			string: '🌞 Light',
		},
	};
	// eslint-disable-next-line no-unused-vars
	const [theme, setTheme] = useState(themeObject.light);

	function switchTheme() {
		setTheme((theme) => {
			if (theme.bg === 'dark') {
				return (theme = themeObject.light);
			} else {
				return (theme = themeObject.dark);
			}
		});
	}

	return {
		theme: theme,
		switchTheme: switchTheme,
	};
}
