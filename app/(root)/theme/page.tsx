'use client';
import { Button } from '@/components/Button';
import { useTheme } from 'next-themes';
import Link from 'next/link';

export default function page() {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const { setTheme } = useTheme();

	return (
		<div className='container '>
			{/* H1 */}
			<h1>Heading1</h1>
			<h2>Heading 2</h2>
			<h3>Heading 3</h3>
			<h4>Heading 5</h4>
			<h5>Heading 6</h5>

			<br />
			{/* Paragraph */}
			<p className=''>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos voluptas
				cumque provident veniam, autem placeat minima saepe enim consequuntur
				possimus.
			</p>
			<p className='text-primary'>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, adipisci.
				(primary)
			</p>

			<br />
			{/* Link tag */}
			<div className='flex gap-3'>
				<Link href={'#'}>Primary Link</Link>
				<Link href={'#'}>Light Link</Link>
			</div>

			<br />
			{/* Button */}
			<div className='flex gap-3'>
				<Button variant={'default'}>Primary</Button>
				<Button variant={'secondary'}>Secondary</Button>
				<Button variant={'destructive'}>Distructive</Button>
				<Button variant={'ghost'}>Ghost</Button>
				<Button variant={'outline'}>Outline</Button>
			</div>
			<br />
			<div className='flex gap-3'>
				<Button variant={'default'} onClick={() => setTheme('light')}>
					Light mode
				</Button>
				<Button variant={'default'} onClick={() => setTheme('dark')}>
					Dark mode
				</Button>
			</div>
		</div>
	);
}
