export default function SectionHeader({
	header,
	description,
}: {
	header: string;
	description: string;
}) {
	return (
		<div className='container space-y-2'>
			<h1 className='md:text-5xl lg:text-7xl'>{header}</h1>
			<p className='text-muted-foreground text-xs md:text-base'>{description}</p>
			<hr />
		</div>
	);
}
