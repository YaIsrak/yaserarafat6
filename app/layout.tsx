import type { Metadata } from 'next';

// styles
import { ThemeProvider } from '@/components/theme-provider';
import '@/styles/globals.css';
import '@/styles/globals.scss';
import Footer from './_layout/Footer';
import Navbar from './_layout/Navbar';

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
		<html lang='en' suppressHydrationWarning={true}>
			<body>
				<ThemeProvider
					attribute='class'
					defaultTheme='dark'
					enableSystem
					disableTransitionOnChange
				>
					<Navbar />
					<main>{children}</main>
					<Footer />
				</ThemeProvider>
			</body>
		</html>
	);
}
