export default function PTag({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) {
	return (
		<p className={`m-0 text-muted-foreground  text-sm md:text-lg ${className}`}>
			{children}
		</p>
	);
}
