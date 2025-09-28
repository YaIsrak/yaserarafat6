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

export const metadata: Metadata = {
	title: {
		default: 'Israk',
		template: `%s | Israk`,
	},
	description:
		'A Bangladesh-based web developer specializing in modern, high-performance websites. I focus on building sleek, interactive, and user-friendly web experiences using Next.js, React, and Tailwind CSS. Passionate about clean code, seamless UX, and innovative web solutions.',
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
