import Navbar from '../../components/Nav';
import Footer from '../Footer';

export default function AboutLayout({ children }) {
	return (
		<>
			<Navbar />
			<main>{children}</main>
			<Footer />
		</>
	);
}
