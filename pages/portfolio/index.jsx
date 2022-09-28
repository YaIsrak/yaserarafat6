import Layout from '../../components/Layout';
import PorfolioIntro from '../../components/PorfolioIntro';
// images
import cover from '../../public/images/art-bg.jpg';
import cover2 from '../../public/images/cover2.jpg';

export default function Portfolio() {
	return (
		<Layout>
			<PorfolioIntro
				link={'https://www.instagram.com/_is.rak_'}
				name={'Art Portfolio'}
				photos={cover}
			/>
			<hr />
			<PorfolioIntro
				link={'https://www.behance.net/israk'}
				name={'Design Portfolio'}
				photos={cover2}
				left={true}
			/>
			<hr />
			<PorfolioIntro
				link={'/portfolio/web-design'}
				name={'Web Develpoment Portfolio'}
				photos={cover2}
			/>
		</Layout>
	);
}
