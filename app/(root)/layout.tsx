import Navbar from '@/components/layout/Navbar';

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<Navbar />
			<main className='relative'>{children}</main>
		</>
	);
}
