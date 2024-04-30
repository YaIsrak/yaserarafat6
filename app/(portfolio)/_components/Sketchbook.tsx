import { baseUrl } from '@/lib/utils';
import { SketchBookProps } from '@/type.typing';
import SketchbookCard from './SketchbookCard';

export default async function Sketchbook() {
	const { res } = await getSketchBookData();
	const datas: SketchBookProps[] = res;

	return (
		<div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 py-2'>
			{datas.map((data: SketchBookProps) => (
				<SketchbookCard key={data._id} data={data} />
			))}
		</div>
	);
}

async function getSketchBookData() {
	const res = await fetch(`${baseUrl}/api/sketchbook`)
		.then((res) => res.json())
		.catch((error) => {
			throw new Error(`failed to fetch data: ${error.message}`);
		});

	return { res, revalidate: 86400 };
}

export const dynamic = 'force-dynamic';
