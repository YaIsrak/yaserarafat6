import { baseUrl, dateFormatter } from '@/lib/utils';
import { BlogProps } from '@/type.typing';
import Image from 'next/image';
import Link from 'next/link';
import PortableText from 'react-portable-text';

export default async function page({ params }: { params: { slug: string } }) {
	const { res } = await getSingleBlog(params.slug);
	const data: BlogProps = res;
	return (
		<section className='section'>
			<div className='container'>
				{/* header */}
				<header className='text-center'>
					<h1 className='font-bold'>{data.title}</h1>

					<p className='text-muted-foreground my-6'>
						{dateFormatter(data.publishedAt)}
					</p>
				</header>

				{/* Image section */}
				<div className='relative w-full h-56 md:h-96'>
					<Image
						src={data.imageUrl.url}
						alt={data.title}
						className='rounded-xl !object-cover'
						fill
						placeholder='blur'
						blurDataURL='/images/loading.png'
					/>
				</div>

				<br />
				<br />

				{/* Body */}
				<div className='mx-0 md:mx-12 lg:mx-44 '>
					<PortableText
						content={data.body}
						serializers={{
							h1: (props: any) => <h1 className='display-3 mb-4 mt-6' {...props} />,
							h2: (props: any) => <h1 className='display-4 mb-4 mt-6' {...props} />,
							h3: (props: any) => <h1 className='display-5 mb-4 mt-6' {...props} />,
							h4: (props: any) => <h1 className='display-6 mb-4 mt-6' {...props} />,
							a: (props: any) => <h1 className='text-primary' {...props} />,
							li: ({ children }: { children: React.ReactNode }) => (
								<li className='list-disc list-inside'>{children}</li>
							),
						}}
					/>
				</div>

				{/* Footer */}
				<Link href={'/blog'}>
					<p className='text-center text-2xl py-8 text-primary hover:text-primary no-underline'>
						See all blog
					</p>
				</Link>
			</div>
		</section>
	);
}

async function getSingleBlog(slug: string) {
	const res = await fetch(`${baseUrl}/api/blog/${slug}`)
		.then((res) => res.json())
		.catch((err) => {
			throw new Error(`failed to fetch data: ${err.message}`);
		});
	return {
		res,
		cache: 'no-store',
		revalidate: 86400,
	};
}

export async function generateMetadata({
	params,
}: {
	params: { slug: string };
}) {
	const { res } = await getSingleBlog(params.slug);
	const data: BlogProps = res;
	if (!data)
		return {
			title: 'Not found',
			description: 'This page is not found',
		};

	return {
		title: data.title,
		description: data.description,
		alternates: {
			canonical: `https://yaserisrak.vercel.app/blog/${params.slug}`,
		},
	};
}

export const dynamic = 'force-dynamic';
