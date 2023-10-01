import CImage from '../../CImage';
import sanityClient from '../../../client';
import Button from '../../../components/Button';
import SectionHeader from '../../SectionHeader';

export default async function Webdesign() {
	const info = await getData();
	const datas = info.props.datas;

	return (
		<section>
			<div className='container'>
				<SectionHeader
					href='/portfolio'
					heading='My Web Development Portfolio'
					body='lorem'
				/>
				<hr />
				{datas ? <Posts datas={datas} /> : <h1>nai</h1>}
			</div>
		</section>
	);
}
function Posts({ datas }) {
	return (
		<div className='tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 md:tw-grid-cols-3 lg:tw-grid-cols-4 tw-gap-3'>
			{datas?.map((data) => (
				<Post key={data._id} data={data} />
			))}
		</div>
	);
}

function Post({ data }) {
	return (
		<div className=''>
			<div className='card bg-transparent'>
				<div className='position-relative tw-w-full tw-h-80'>
					<CImage src={`${data.imageUrl.url}`} alt='...' />
				</div>
				<div className='card-body'>
					<h2>{data.title}</h2>
					<Button link={data.url}>View</Button>
				</div>
			</div>
		</div>
	);
}

async function getData() {
	const res = await sanityClient.fetch(
		`*[_type == 'web']{
					...,
					"imageUrl": mainImage.asset->{ url}
		  		}`
	);
	return {
		props: {
			datas: res,
		},
		revalidate: 10,
	};
}
