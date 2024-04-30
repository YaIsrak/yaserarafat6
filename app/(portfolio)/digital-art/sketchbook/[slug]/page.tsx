import SectionHeader from '@/app/(portfolio)/_components/SectionHeader';
import Loading from '@/app/loading';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { baseUrl } from '@/lib/utils';
import { SketchBookProps } from '@/type.typing';
import Image from 'next/image';

export default async function page({ params }: { params: { slug: string } }) {
	const { res } = await getSingleSketchBook(params.slug);
	const data: SketchBookProps = res;

	return (
		<section className='section'>
			<SectionHeader header={data.title} description={data.body} />
			<div className='container'>
				<div className='grid gap-3 grid-cols-1 md:grid-cols-3 lg:grid-cols-4'>
					{data ? (
						<>
							{data.imageUrl?.map((image: { url: string }, i: any) => (
								<Dialog key={i}>
									<DialogTrigger className='relative w-full h-full'>
										<Image
											src={image.url}
											alt={data.title + ' ' + data.body}
											className='rounded-lg object-contain h-auto w-full'
											width={500}
											height={500}
										/>
									</DialogTrigger>
									<DialogContent>
										<Image
											src={image.url}
											alt={data.title + ' ' + data.body}
											className='rounded-lg object-contain h-auto w-full'
											width={500}
											height={500}
										/>
									</DialogContent>
								</Dialog>
							))}
						</>
					) : (
						<Loading />
					)}
				</div>
			</div>
		</section>
	);
}

async function getSingleSketchBook(slug: string) {
	const res = await fetch(`${baseUrl}/api/sketchbook/${slug}`)
		.then((res) => res.json())
		.catch((err) => {
			throw new Error(err);
		});

	return { res, revalidate: 86400 };
}

export async function generateMetadata({
	params,
}: {
	params: { slug: string };
}) {
	const res = await getSingleSketchBook(params.slug);
	const data: SketchBookProps = res.res;
	if (!data)
		return {
			title: 'Not found',
			description: 'This page is not found',
		};

	return {
		title: data.title,
		description: data.body,
		alternates: {
			canonical: `https://yaserisrak.vercel.app/digital-art/sketchbook/${params.slug}`,
		},
	};
}
