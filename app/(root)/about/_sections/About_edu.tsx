import BlurFade from '@/components/magicui/blur-fade';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { educations } from '@/lib/constants';

export default function About_Edu() {
	return (
		<section className='container py-[5vmin]'>
			<BlurFade
				delay={0.4}
				inView>
				<h5 className='mb-4 text-primary'>Education</h5>
			</BlurFade>
			<BlurFade
				delay={0.4}
				inView
				className='flex flex-col gap-4'>
				{educations.map((edu, i) => (
					<div
						key={i}
						className='flex items-center gap-4'>
						<Avatar className='size-12 bg-primary-foreground/10'>
							<AvatarFallback>W</AvatarFallback>
							<AvatarImage
								src={edu.image}
								alt={edu.institute}
								className='object-cover'
							/>
						</Avatar>

						<div className='flex-1'>
							<p className='text-semibold text-lg text-primary'>
								{edu.institute}
							</p>
							<p className='text-sm text-muted-foreground'>
								{edu.degree}
							</p>
						</div>

						<div className='text-right text-sm text-muted-foreground'>
							<p>{edu.time}</p>
							<p>{edu.location}</p>
						</div>
					</div>
				))}
			</BlurFade>
		</section>
	);
}
