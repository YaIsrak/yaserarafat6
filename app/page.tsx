import { Button } from '@/components/ui/button';

export default function Home() {
	return (
		<>
			<Template />
			<Template />
			<Template />
			<Template />
			<Template />
			<Template />
			<Template />
			<Template />
		</>
	);
}

function Template() {
	return (
		<section className='section'>
			<div className='container'>
				<h1>Hello world</h1>
				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique ab,
					omnis aperiam dolorem error nesciunt repellat, accusantium quam tenetur
					nisi non corporis repellendus reiciendis et expedita ipsa in deserunt,
					nihil tempore dolor quibusdam? Consequatur placeat officiis aliquid rem
					quos suscipit animi impedit fuga omnis, quibusdam vitae quas. Reiciendis
					praesentium velit, asperiores mollitia sint accusamus. Ducimus expedita
					consequatur dolore labore quidem voluptas, esse eos facere natus, molestias
					libero impedit. Magnam placeat explicabo cumque incidunt, dolor
					reprehenderit asperiores ipsam architecto ab debitis officiis nemo soluta
					perspiciatis amet minima quo porro iure aspernatur quia velit esse?
					Expedita velit vel delectus labore. Dolorem, placeat.
				</p>
				<Button>Click here</Button>
			</div>
		</section>
	);
}
