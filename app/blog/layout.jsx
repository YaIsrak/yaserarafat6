import Navbar from '../../components/Nav';
import Footer from '../Footer';

export default function BlogLayout({ children }) {
	return (
		<>
			<Navbar />
			<main>{children}</main>
			<Footer />
		</>
	);
}
