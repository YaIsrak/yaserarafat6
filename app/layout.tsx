import metaData from '@/lib/metaData';
import { cn } from '@/lib/utils';
import type { Metadata } from 'next';
import { ViewTransitions } from 'next-view-transitions';
import { Instrument_Serif, Inter } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });
const instrument = Instrument_Serif({
	subsets: ['latin'],
	weight: '400',
	variable: '--font-instrument',
	style: ['italic'],
});
const thunder = localFont({
	src: '../public/fonts/Thunder-VF.ttf',
	variable: '--font-thunder',
});
const playground = localFont({
	src: '../public/fonts/PPPlayground.otf',
	variable: '--font-playground',
});

export const metadata: Metadata = metaData;

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			suppressHydrationWarning
			lang='en'>
			<body
				suppressHydrationWarning
				className={cn(
					inter.className,
					instrument.variable,
					thunder.variable,
					playground.variable,
					'bg-white relative subpixel-antialiased ',
				)}>
				<ViewTransitions>{children}</ViewTransitions>
			</body>
		</html>
	);
}
