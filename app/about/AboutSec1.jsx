'use client';

import { motion } from 'framer-motion';
import Button from '../../components/Button';
import MainPhoto from '../../public/images/cp-min.jpg';
import CImage from '../CImage';

const container = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		y: 0,
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

export default function AboutSec1() {
	const links = [
		{
			name: 'Facebook',
			link: 'https://www.facebook.com/yaser.arafat.israk',
		},
		{
			name: 'Instagram',
			link: 'https://www.instagram.com/y_israk',
		},
	];

	return (
		<section className='sec1 p-0 tw-overflow-x-hidden'>
			<div className='tw-grid tw-grid-cols-1 md:tw-grid-cols-2'>
				<div className='tw-overflow-hidden tw-justify-center tw-flex'>
					<div className='tw-relative tw-w-full tw-mx-11 tw-mt-24 md:tw-m-0'>
						<CImage src={MainPhoto} alt='Profile photo' priority local />
					</div>
				</div>
				<div className='m-auto' style={{ padding: '15vmin' }}>
					<motion.div
						className='container'
						variants={container}
						initial={'hidden'}
						whileInView={'show'}
					>
						<motion.h1 className='fw-bold tw-text-5xl' variants={item}>
							MD Yaser Arafat <span className='txt-primary'>Israk</span>
						</motion.h1>
						<motion.div className='d-flex gap-1' variants={item}>
							{links.map((link, index) => (
								<Button link={link.link} key={index} className='mb-2'>
									{link.name}
								</Button>
							))}
						</motion.div>
						<motion.p
							className='text-muted tw-text-sm lg:tw-text-base'
							variants={item}
						>
							I am a Digital Artist, designer and Web Developer from Bangladesh. 🇧🇩
						</motion.p>
						<motion.p
							className='font2 text-muted tw-text-xl'
							variants={item}
						>{`// 2+ years of experience`}</motion.p>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
