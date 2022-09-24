import Head from 'next/head';
import { useRouter } from 'next/router';
import Footer from './Footer';
import Navbar from './Nav';

export default function Layout({ children, route }) {
	return (
		<>
			<Head>
				<title>Israk {route}</title>
			</Head>
			<Navbar />
			<main>{children}</main>
			<hr />
			<Footer />
		</>
	);
}
