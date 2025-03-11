import { ThemeProvider } from '@/components/theme-provider';
import { SanityLive } from '@/sanity/lib/live';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

// const geistSans = Geist({
// 	variable: '--font-geist-sans',
// 	subsets: ['latin'],
// });

const ClashDisplay = localFont({
	src: '../public/fonts/ClashDisplay-Variable.ttf',
	variable: '--font-clash-display',
});

const Chaney = localFont({
	src: '../public/fonts/chaney-ultraextended-webfont.ttf',
	variable: '--font-chaney',
});

export const metadata: Metadata = {
	title: {
		default: 'Israk',
		template: `%s | Israk`,
	},
	description:
		'MD Yaser arafat israk, digital artist of Chittagong, Bangladesh',
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
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html suppressHydrationWarning>
			<body
				className={`${ClashDisplay.variable} ${Chaney.variable} font-clash-display`}>
				<ThemeProvider
					attribute='class'
					defaultTheme='dark'
					enableSystem
					disableTransitionOnChange>
					{children}
				</ThemeProvider>
			</body>

			<SanityLive />
		</html>
	);
}
