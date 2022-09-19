export default function FooterP({ children, className }) {
	return (
		<p className={`text-sm lg:text-xl text-primary ${className}`}>{children}</p>
	);
}
