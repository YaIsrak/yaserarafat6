export default function Button({ children, className, link, ...rest }) {
	return (
		<a href={link}>
			<button
				className={`py-2 px-3 mb-2 bg-indigo-500  text-gray-100 rounded-lg border-2 border-indigo-500 hover:bg-indigo-500/0 hover:text-indigo-500 ${className}`}
				{...rest}>
				{children}
			</button>
		</a>
	);
}
