import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/global.scss';

// component
import Footer from './Footer';
import Navbar from '../components/Nav';
import Head from 'next/head';

export const metadata = {
	title: {
		default: 'Israk',
		template: `Israk | %s`,
	},
	description: 'MD Yaser arafat israk, digital artist of Chittagong, Bangladesh',
	verification: {
		google: 'google-site-verification= googleeff188a2933ed135',
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang='en' className='dark'>
			<Head>
				<link
					rel='stylesheet'
					href='https://use.fontawesome.com/releases/v5.15.2/css/all.css'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<body suppressHydrationWarning={true}>
				<Navbar />
				<main>{children}</main>
				<Footer />
				<script src='https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js'></script>
			</body>
		</html>
	);
}
