import { Button } from '@/components/ui/button';
import {
	Dialog,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog';
import { WebDesignProps } from '@/type.typing';
import { ArrowUpRightFromSquare, Github } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function WebDesignCard({ data }: { data: WebDesignProps }) {
	return (
		<Dialog>
			<DialogTrigger className=''>
				<div className='p-2 rounded-sm bg-transparent group/web hover:bg-primary/10 transition-all'>
					<div className='relative aspect-video overflow-hidden'>
						<Image
							src={data.mainImageUrl.url}
							width={500}
							height={500}
							alt={data.title}
							className='rounded-lg object-fill'
						/>
					</div>
					<p className='mt-6 group-hover/web:text-primary transition-all text-start'>
						{data.title}
					</p>
					<div className='grid grid-cols-3 gap-2'>
						{data.technology.map((tech) => (
							<Button
								variant={'outline'}
								size={'sm'}
								key={tech._id}
								className='line-clamp-1'
							>
								{tech.name}
							</Button>
						))}
					</div>
				</div>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle className='text-5xl'>{data.title}</DialogTitle>
				</DialogHeader>
				<div className='relative aspect-video overflow-hidden'>
					<Image
						src={data.mainImageUrl.url}
						width={500}
						height={500}
						alt={data.title}
						className='rounded-sm'
					/>
				</div>
				<div className='flex gap-2'>
					{data.technology.map((tech) => (
						<Button variant={'outline'} size={'sm'} key={tech._id}>
							{tech.name}
						</Button>
					))}
				</div>
				<DialogFooter>
					{data.github && (
						<Button variant='outline' asChild>
							<Link href={data.github} className='flex gap-2'>
								GITHUB
								<Github className='h-4 w-4' />
							</Link>
						</Button>
					)}
					{data.url && (
						<Button variant='outline' asChild>
							<Link href={data.url} className='flex gap-2'>
								ViEW
								<ArrowUpRightFromSquare className='h-4 w-4' />
							</Link>
						</Button>
					)}
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
