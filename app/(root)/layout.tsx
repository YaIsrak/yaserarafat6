import Footer from '@/components/Layout/Footer';
import Navigationbar from '@/components/Layout/NavigationBar';
import type { Metadata } from 'next';
//
import 'bootstrap/dist/css/bootstrap.min.css';
//
import '@/styles/globals.scss';
//
import '../globals.css';

export const metadata: Metadata = {
	title: {
		default: 'Israk',
		template: `%s | Israk`,
	},
	description: 'MD Yaser arafat israk, digital artist of Chittagong, Bangladesh',
	robots: {
		follow: true,
		index: true,
	},
	verification: {
		google: 'fmDb5LvLMBphFnbLxy0twqLiHhx4sOWt_ie3fZKiGwk',
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang=''>
			<body suppressHydrationWarning={true}>
				<Navigationbar />
				<main>{children}</main>
				<Footer />
				{/* eslint-disable-next-line @next/next/no-sync-scripts */}
				<script src='https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js'></script>
			</body>
		</html>
	);
}
