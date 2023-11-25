'use client';
import { container, item, songLists } from '@/lib/constantData';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Footer() {
	return (
		<footer className='tw-font-mono'>
			<hr />
			<motion.div
				className='container tw-z-auto'
				variants={container}
				initial={'hidden'}
				whileInView={'show'}
			>
				<motion.p className='text-muted fs-3' variants={item}>
					{'// Made with'}
				</motion.p>
				<motion.div className='row' variants={container}>
					<motion.div className='col-4 code' variants={item}>
						<br />
						<FooterP>{'</>'}</FooterP>
						<br />
						<br />
						<FooterP>Bootstrap</FooterP>
						<FooterP>Tailwind CSS</FooterP>
						<FooterP>Next.js</FooterP>
						<FooterP>Sanity</FooterP>
						<FooterP>Gsap</FooterP>
						<FooterP>Framer Motion</FooterP>
						<FooterP>Adobe XD</FooterP>
					</motion.div>
					<motion.div className='col-4 expe' variants={item}>
						<br />
						<FooterP>{'~'}</FooterP>
						<br />
						<br />
						<FooterP>+5h of thinking</FooterP>
						<FooterP>+30h of code</FooterP>
						<FooterP>+20 of code crash</FooterP>
					</motion.div>
					<motion.div className='col-4 song' variants={item}>
						<br />
						<FooterP>🎵</FooterP>
						<br />
						<br />
						{songLists.map((songList, index) => (
							<FooterP className='hover:tw-bg-primary/10' key={index}>
								<a className='txt-primary' href={songList.link}>
									{songList.name}
								</a>
							</FooterP>
						))}
					</motion.div>
				</motion.div>
				<div className='tw-my-8'>
					<h1 className='h3'>Thanks for checking my website!</h1>
					<p className='text-muted tw-font-mono tw-text-sm lg:tw-text-lg'>
						{"// It's a work in progress so check back often!"}
					</p>
					<Link
						href={'/blog'}
						className='tw-text-primary hover:tw-text-primary tw-no-underline'
					>
						See my blog
					</Link>
				</div>
			</motion.div>
		</footer>
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
		<p className={`tw-text-sm lg:tw-text-xl tw-mb-0 txt-primary ${className}`}>
			{children}
		</p>
	);
}
