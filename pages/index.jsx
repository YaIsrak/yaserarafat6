import Head from 'next/head';
import Layout from '../components/Layout';
import HeroSec from '../components/HeroSec';
import PortfolioSec1 from '../components/PorfolioSec1';
import AboutSec1 from '../components/AboutSec1';

export default function Home() {
	return (
		<div>
			<Head>
				<title>Create Next App</title>
				<meta name='description' content='Generated by create next app' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Layout>
				<HeroSec />
				<hr />
				<PortfolioSec1 />
				<AboutSec1 />
			</Layout>
		</div>
	);
}
