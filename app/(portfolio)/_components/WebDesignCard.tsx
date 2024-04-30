import { Button } from '@/components/ui/button';
import { WebDesignProps } from '@/type.typing';
import { ArrowUpRightFromSquare, Github } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function WebDesignCard({ data }: { data: WebDesignProps }) {
	return (
		<div>
			<div className='space-y-2 bg-muted-foreground/20 rounded-lg overflow-hidden' >
				<div className='h-56 overflow-hidden'>
					<Image
						src={data.mainImageUrl.url}
						width={1000}
						height={1000}
						alt={data.title}
						className='rounded-t-lg object-contain'
					/>
				</div>
				<div>
					<p className='font1 p-4 mt-6 group-hover/web:text-primary transition-all text-start text-xl'>{data.title}</p>
					<div className='flex gap-2'>
						<Button asChild variant={"outline"}>
							<Link href={data.url} target='_blank' className='flex gap-2'>
								View <ArrowUpRightFromSquare className='h-4 w-4' />
							</Link>
						</Button>
						{data.github && (

							<Button asChild variant={"outline"}>
								<Link href={data.github} className='flex gap-2'>
									Github <Github className='h-4 w-4' />
								</Link>
							</Button>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
