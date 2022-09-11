import Footer from './Footer';
import Navbar from './Nav';

export default function Layout({ children }) {
	return (
		<>
			<Navbar />
			<main>{children}</main>
			<hr />
			<Footer />
		</>
	);
}
