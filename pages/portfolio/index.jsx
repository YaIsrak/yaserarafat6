import Layout from '../../components/Layout';
import Button from '../../components/Button';
export default function Portfolio() {
	return (
		<Layout>
			<section>
				<div className='container'>
					<h1>Hello</h1>
					<Button link='/portfolio/graphic-design'>Art</Button>
					<Button link='/portfolio/graphic-design'>Graphic Design</Button>
					<Button link='/portfolio/web-design'>Web Design</Button>
				</div>
			</section>
		</Layout>
	);
}
