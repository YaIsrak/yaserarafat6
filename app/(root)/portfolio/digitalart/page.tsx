import Sketchbooks from '@/components/Section/Sketchbooks';

export default async function Page() {
	return (
		<div className='tw-py-4'>
			<h1 className='display-3 tw-text-center'>Sketchbooks tour</h1>
			<Sketchbooks homepage={false} />
		</div>
	);
}
