'use client';

import { motion } from 'framer-motion';

const container = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
			duration: 0.1,
		},
	},
};
const item = {
	hidden: { opacity: 0 },
	show: { opacity: 1 },
};

// song list
const songLists = [
	{
		name: 'E hawa',
		link:
			'https://open.spotify.com/track/5VIyjOoXddMARgRTtKVqXc?si=e776c9afbbc24e59',
	},
	{
		name: 'Loki green theme',
		link:
			'https://open.spotify.com/track/5T7DUEeAj0hkMLTzIlDCRz?si=045eedd5c76d4c05',
	},
	{
		name: 'Marry go round of Life',
		link:
			'https://open.spotify.com/track/3cIKojC2JBVIno9b35MJWn?si=9f4e0db3811e4ed1',
	},
	{
		name: 'Katware Doki',
		link:
			'https://open.spotify.com/track/4WedBZTeFawYCBCgfj36iK?si=68aa41933c7f4183',
	},
	{
		name: 'Utshorgo',
		link:
			'https://open.spotify.com/track/7tcHBMra1AZ3QWIHX3hX0r?si=7756f09bc62e4dff',
	},
	{
		name: 'Blinding Light',
		link:
			'https://open.spotify.com/track/0VjIjW4GlUZAMYd2vXMi3b?si=44ada2d436d34fac',
	},
];

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
				<motion.img
					alt='GIF'
					src='https://media4.giphy.com/media/liUhPmZdArpYc/giphy.gif'
					variants={item}
				/>
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
				</div>
			</motion.div>
		</footer>
	);
}

function FooterP({ children, className }) {
	return (
		<p className={`tw-text-sm lg:tw-text-xl tw-mb-0 txt-primary ${className}`}>
			{children}
		</p>
	);
}
