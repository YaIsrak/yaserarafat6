import Layout from '../../components/Layout';
import Button from '../../components/Button';
import PorfolioIntro from '../../components/PorfolioIntro';
export default function Portfolio() {
	return (
		<Layout>
			<PorfolioIntro
				url={'/images/art-bg.jpg'}
				link={'https://www.instagram.com/_is.rak_'}
			/>
			<section>
				<div className='container'>
					<Button link='/portfolio/graphic-design'>Graphic Design</Button>
					<Button link='/portfolio/web-design'>Web Design</Button>
				</div>
			</section>
		</Layout>
	);
}
