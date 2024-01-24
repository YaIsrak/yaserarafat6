import { cn } from '@/lib/utils';
import Link from 'next/link';

export default function Footer() {
	return (
		<>
			<hr />
			<footer className='font-mono py-12'>
				<div className='container'>
					<p className='text-muted-foreground'>{'// Made with'}</p>

					{/* list */}
					<div className='grid grid-cols-2 md:grid-cols-3'>
						{/* Code */}
						<div>
							<br />
							<FooterP>{'</>'}</FooterP>
							<br />
							<br />
							<FooterP>Tailwind CSS</FooterP>
							<FooterP>Next.js</FooterP>
							<FooterP>Sanity</FooterP>
							<FooterP>Gsap</FooterP>
							<FooterP>Framer Motion</FooterP>
						</div>
						{/* Value */}
						<div>
							<br />
							<FooterP>{'~'}</FooterP>
							<br />
							<br />
							<FooterP>+5h of thinking</FooterP>
							<FooterP>+30h of code</FooterP>
							<FooterP>+20 of code crash</FooterP>
						</div>
					</div>
					<div className='my-8'>
						<h2>Thanks for checking my website!</h2>
						<p className='text-muted-foreground font-mono text-sm lg:text-lg'>
							{"// It's a work in progress so check back often!"}
						</p>
						<Link
							href={'/blog'}
							className='text-primary hover:text-primary no-underline'
						>
							See my blog
						</Link>
					</div>
				</div>
			</footer>
		</>
	);
}

function FooterP({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) {
	return (
		<p className={cn('text-sm lg:text-xl text-primary', className)}>{children}</p>
	);
}
