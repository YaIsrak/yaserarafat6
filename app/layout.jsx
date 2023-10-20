import { Analytics } from '@vercel/analytics/react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/global.scss';
import '../styles/globals.css';

// component
import Head from 'next/head';
import Navbar from '../components/Nav';
import Footer from './Footer';

export const metadata = {
	title: {
		default: 'Israk',
		template: `Israk | %s`,
	},
	description: {
		default: 'MD Yaser arafat israk, digital artist of Chittagong, Bangladesh',
		template:
			'%s | MD Yaser arafat israk, digital artist of Chittagong, Bangladesh',
	},
	verification: {
		google:
			'google-site-verification=fmDb5LvLMBphFnbLxy0twqLiHhx4sOWt_ie3fZKiGwk',
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
				<Analytics />
			</body>
		</html>
	);
}
