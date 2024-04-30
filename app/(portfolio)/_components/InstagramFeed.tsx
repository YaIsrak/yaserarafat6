/* eslint-disable @next/next/no-img-element */
'use client';

import { Button } from '@/components/ui/button';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel';
import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer';
import useInstagramFeed from '@/lib/hooks/useInstagramFeed';
import { InstagramMediaProps } from '@/type.typing';
import { Loader } from 'lucide-react';
import Link from 'next/link';

export default function InstagramFeed() {
	const { InstaQuery, loading, error, setRestAPI } = useInstagramFeed();

	return (
		<div className='space-y-6'>
			{/* Button */}
			<div className='flex justify-between'>
				{InstaQuery?.paging.previous ? (
					<Button onClick={() => setRestAPI(InstaQuery?.paging.previous)}>
						Prev
					</Button>
				) : (
					<span></span>
				)}
				{InstaQuery?.paging.next ? (
					<Button onClick={() => setRestAPI(InstaQuery?.paging.next)}>Next</Button>
				) : (
					<span></span>
				)}
			</div>

			{/* Feed */}
			<div className='grid grid-cols-2 md:grid-cols-4 gap-2'>
				{!loading ? (
					!error &&
					InstaQuery?.data &&
					InstaQuery?.data?.map((InstaQ) => (
						<InstagramPostCard key={InstaQ.id} InstaQ={InstaQ} />
					))
				) : (
					<div className='col-span-4 w-full section flex items-center justify-center'>
						<Loader className='animate-spin' />
					</div>
				)}
			</div>
		</div>
	);
}

function InstagramPostCard({ InstaQ }: { InstaQ: InstagramMediaProps }) {
	return (
		<>
			{InstaQ.media_type != 'VIDEO' && (
				<Drawer>
					<DrawerTrigger className='aspect-square overflow-hidden'>
						{/* eslint-disable-next-line @next/next/no-img-element */}
						<img
							src={InstaQ.trumbnail_url}
							alt={InstaQ.media_url}
							width={500}
							height={500}
						/>
					</DrawerTrigger>
					<DrawerContent>
						<div className='container space-y-6 my-6'>
							{InstaQ.caption && (
								<p className='text-sm text-muted-foreground line-clamp-3 md:line-clamp-2'>
									{InstaQ.caption}
								</p>
							)}
							{/* Static Image */}
							{InstaQ.media_type === 'IMAGE' && (
								<Link className='' href={InstaQ.permalink} target='_blank'>
									{/* eslint-disable-next-line @next/next/no-img-element */}
									<img
										src={InstaQ.media_url}
										alt={InstaQ.media_url}
										width={300}
										height={300}
										className='mx-auto'
									/>
								</Link>
							)}
							{InstaQ.media_type === 'CAROUSEL_ALBUM' && (
								<Carousel>
									<CarouselContent>
										{InstaQ.children?.data?.map((child) => (
											<CarouselItem key={child.id}>
												<img
													src={child.media_url}
													alt={child.media_url}
													width={300}
													height={300}
													className='mx-auto'
												/>
											</CarouselItem>
										))}
									</CarouselContent>
									<CarouselPrevious />
									<CarouselNext />
								</Carousel>
							)}
						</div>
					</DrawerContent>
				</Drawer>
			)}
		</>
	);
}
