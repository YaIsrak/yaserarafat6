import { BlurFade } from '@/components/ui/blur-fade';
import {
	MorphingDialog,
	MorphingDialogClose,
	MorphingDialogContainer,
	MorphingDialogContent,
	MorphingDialogTrigger,
} from '@/components/ui/morphing-dialog';
import { getBlurDataUrl } from '@/lib/getBlurDataUrl';
import { ARTWORKS_QUERYResult } from '@/sanity.types';
import { urlFor } from '@/sanity/lib/image';
import { sanityFetch } from '@/sanity/lib/live';
import { ARTWORKS_QUERY } from '@/sanity/lib/queries';
import { XIcon } from 'lucide-react';
import Image from 'next/image';
import { Suspense } from 'react';

export default async function GallerySection() {
	return (
		<section className='py-[20vmin]'>
			<div className='container mx-auto px-2 md:px-0'>
				<BlurFade className='text-4xl font-instrument italic'>
					Art Gallery
				</BlurFade>

				{/* Gallery */}
				<BlurFade
					delay={0.15}
					className='mt-4'>
					<div className='grid grid-cols-2 md:grid-cols-4 mt-8 gap-4'>
						<Suspense fallback={<div>Loading...</div>}>
							<GalleryGrid />
						</Suspense>
					</div>
				</BlurFade>
			</div>
		</section>
	);
}

async function GalleryGrid() {
	const { data: artworks } = await sanityFetch({
		query: ARTWORKS_QUERY,
	});

	// console.log(artworks);

	return (
		<>
			{artworks.map((art) => (
				<Suspense
					fallback={<div>Loading...</div>}
					key={art._id}>
					<ArtworkCard
						key={art._id}
						art={art}
					/>
				</Suspense>
			))}
		</>
	);
}

async function ArtworkCard({ art }: { art: ARTWORKS_QUERYResult[0] }) {
	const blur_url = await getBlurDataUrl(
		urlFor(art.image!).width(100).url() ?? '',
	);

	return (
		<MorphingDialog
			key={art._id}
			transition={{
				duration: 0.3,
				ease: 'easeInOut',
			}}>
			<MorphingDialogTrigger>
				<Image
					src={urlFor(art.image!).width(500).url()}
					width={500}
					height={500}
					alt='artwork'
					className='w-full h-full object-cover'
					placeholder='blur'
					blurDataURL={blur_url}
				/>
			</MorphingDialogTrigger>
			<MorphingDialogContainer className='z-[50000]'>
				<MorphingDialogContent className='relative '>
					<Image
						src={urlFor(art.image!).width(700).url()}
						width={500}
						height={500}
						alt='artwork'
						className='h-auto w-full max-w-[90vw] rounded-[4px] object-cover lg:h-[90vh]'
						placeholder='blur'
						blurDataURL={blur_url}
					/>
				</MorphingDialogContent>
				<MorphingDialogClose
					className='fixed right-6 top-6 h-fit w-fit rounded-full bg-white p-1'
					variants={{
						initial: { opacity: 0 },
						animate: {
							opacity: 1,
							transition: { delay: 0.3, duration: 0.1 },
						},
						exit: { opacity: 0, transition: { duration: 0 } },
					}}>
					<XIcon className='h-5 w-5 text-zinc-500' />
				</MorphingDialogClose>
			</MorphingDialogContainer>
		</MorphingDialog>
	);
}

// const blur_url = await getBlurDataUrl(project.mainImageUrl?.url ?? '');
