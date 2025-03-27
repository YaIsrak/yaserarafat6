import Navbar from '@/components/layout/Navbar';

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<Navbar />
			<main>{children}</main>

			{/* grid line */}
			<div className='h-full top-0 w-full absolute -z-[30]'>
				<div className='container mx-auto px-2 md:px-0 h-full w-full'>
					<div className='grid grid-cols-4 h-full divide-x divide-muted-foreground/20 border-x border-muted-foreground/20'>
						<div />
						<div />
						<div />
						<div />
					</div>
				</div>
			</div>
		</>
	);
}
