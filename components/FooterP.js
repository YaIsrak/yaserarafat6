export default function FooterP({ children, className }) {
	return (
		<p className={`tw-text-sm lg:tw-text-xl text-primary ${className}`}>
			{children}
		</p>
	);
}
