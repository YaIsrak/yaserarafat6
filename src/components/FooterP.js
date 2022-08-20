export default function FooterP({ children, className }) {
	return (
		<p className={`text-sm lg:text-xl text-indigo-500 ${className}`}>
			{children}
		</p>
	);
}
