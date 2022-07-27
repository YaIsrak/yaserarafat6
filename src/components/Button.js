import { useContext } from 'react';
import { ThemeContext } from '../App';

export default function Button({ children, className, link, ...rest }) {
	const { theme } = useContext(ThemeContext);

	function styleFormate() {
		if (theme.bg === 'dark') {
			return '[#212529]';
		} else {
			return 'gray-100';
		}
	}
	return (
		<a href={link}>
			<button
				className={`bg-indigo-500 py-2 px-3 mb-2 text-gray-100 rounded-lg border-2 border-indigo-500 hover:bg-${styleFormate()} hover:text-indigo-500 ${className}`}
				{...rest}>
				{children}
			</button>
		</a>
	);
}
