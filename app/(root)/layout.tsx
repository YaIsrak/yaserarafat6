import Footer from '@/components/layout/Footer';
import LenisProvider from '@/components/layout/LenisProvider';
import Navbar from '@/components/layout/Navbar';

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<LenisProvider>
			<Navbar />
			<main className='relative max-w-screen overflow-x-hidden'>
				{children}
			</main>
			<Footer />
		</LenisProvider>
	);
}
