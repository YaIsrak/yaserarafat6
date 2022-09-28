import Head from 'next/head';
import Footer from './Footer';
import Navbar from './Nav';

export default function Layout({ children }) {
	return (
		<>
			<Head>
				<title>Israk </title>
			</Head>
			<Navbar />
			<main>{children}</main>
			<hr />
			<Footer />
		</>
	);
}
