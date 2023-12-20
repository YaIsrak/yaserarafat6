import sanityClient from '@/lib/client';
import { dateFormatter } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import PortableText from 'react-portable-text';

export async function generateMetadata({
	params,
}: {
	params: { slug: string };
}) {
	const res = await getData(params.slug);
	const data: Blog = res.res;
	if (!data)
		return {
			title: 'Not found',
			description: 'This page is not found',
		};

	return {
		title: data.title,
		description: data.description,
		alternates: {
			canonical: `https://yaserisrak.vercel.app/blogs/${params.slug}`,
		},
	};
	// const datas = info.props.datas;
}

export default async function page({ params }: { params: { slug: string } }) {
	const res = await getData(params.slug);
	const data: Blog = res.res;

	return (
		<section className='container'>
			{/* header */}
			<header className='text-center'>
				<h1 className='display-3 tw-font-bold'>{data.title}</h1>

				<p className='tw-text-light/50'>{dateFormatter(data.publishedAt)}</p>
			</header>

			{/* Image section */}
			<div className='tw-relative tw-w-full tw-h-56 md:tw-h-96'>
				<Image
					src={data.imageUrl.url}
					alt={data.title}
					className='tw-rounded-xl !tw-object-cover'
					fill
					placeholder='blur'
					blurDataURL='/images/loading.png'
					sizes='(max-width: 1080px) 100vw, (max-width: 1200px) 50vw, 33vw'
				/>
			</div>

			<br />
			<br />

			{/* Body */}
			<div className='tw-mx-0 md:tw-mx-12 lg:tw-mx-44 '>
				<PortableText
					content={data.body}
					serializers={{
						h1: (props: any) => (
							<h1 className='display-3 tw-mb-4 tw-mt-6' {...props} />
						),
						h2: (props: any) => (
							<h1 className='display-4 tw-mb-4 tw-mt-6' {...props} />
						),
						h3: (props: any) => (
							<h1 className='display-5 tw-mb-4 tw-mt-6' {...props} />
						),
						h4: (props: any) => (
							<h1 className='display-6 tw-mb-4 tw-mt-6' {...props} />
						),
						a: (props: any) => <h1 className='tw-text-primary' {...props} />,
						li: ({ children }: { children: React.ReactNode }) => (
							<li className='tw-list-disc tw-list-inside'>{children}</li>
						),
					}}
				/>
			</div>

			{/* Footer */}
			<Link
				href={'/blog'}
				className='tw-text-primary hover:tw-text-primary tw-no-underline '
			>
				<p className='tw-text-center tw-text-2xl tw-py-8'>See all blog</p>
			</Link>
		</section>
	);
}

async function getData(slug: string) {
	const res = await sanityClient.fetch(
		`*[_type == "blog" && slug.current == $slug][0]{
			        ...,
					"imageUrl" : mainImage.asset->{url}
			      }`,
		{ slug }
	);
	return {
		res,
		cache: 'no-store',
		revalidate: 10,
	};
}

export const dynamic = 'force-dynamic';
