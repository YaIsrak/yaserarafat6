import Footer from './Footer';
import Navbar from './Nav';

export default function Layout({ children }) {
	return (
		<>
			<Navbar />
			<main className='dark-theme'>{children}</main>
			<Footer />
		</>
	);
}
