import ButtonEffect from '@/components/ButtonEffect';
import BlurFade from '@/components/magicui/blur-fade';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import About_Sec1 from '../about/_sections/About_Sec1';

export default function AboutMe() {
	return (
		<BlurFade
			inView
			className='section flex flex-col items-center justify-center'>
			<h1>
				About <span className='text-primary'>Me</span>
			</h1>
			<About_Sec1 className='py-12' />
			<ButtonEffect>
				<Button asChild>
					<Link href='/about'>More</Link>
				</Button>
			</ButtonEffect>
		</BlurFade>
	);
}
