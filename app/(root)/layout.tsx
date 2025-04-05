import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<Navbar />
			<main className='relative max-w-screen overflow-x-hidden'>
				{children}
			</main>
			<Footer />
		</>
	);
}
