export default function FooterP({ children, className }) {
	return (
		<p className={`text-sm lg:text-xl text-purple-500 ${className}`}>
			{children}
		</p>
	);
}
