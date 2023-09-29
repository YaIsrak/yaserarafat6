import Head from 'next/head';
import HomeSec from '../components/HomeSec';
import HomeSec2 from '../components/HomeSec2';

export const metadata = {
	title: 'Israk',
};

export default function Home() {
	return (
		<div>
			<Head>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<HomeSec />
			<HomeSec2 />
			<hr />
		</div>
	);
}
