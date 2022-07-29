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
	const [theme, setTheme] = useState(themeObject.light);

	const switchTheme = () => {
		setTheme((theme) => {
			if (theme.bg === 'dark') {
				return (theme = themeObject.light);
			} else {
				return (theme = themeObject.dark);
			}
		});
	};

	return {
		theme: theme,
		switchTheme: switchTheme,
	};
}
