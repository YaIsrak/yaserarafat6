export default function PTag({ children, className }) {
	return (
		<p
			className={`tw-m-0 text-muted fw-bold twtext-sm md:tw-text-lg ${className}`}
		>
			{children}
		</p>
	);
}
