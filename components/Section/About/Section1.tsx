'use client';

import Button from '@/components/Button';
import CustomImage from '@/components/CustomImage';
import { SocialLinks, container, item } from '@/lib/constantData';
import MainPhoto from '@/public/images/cp-min.jpg';
import { motion } from 'framer-motion';

export default function AboutSec1() {
	return (
		<section className='sec1 p-0 tw-overflow-x-hidden'>
			<div className='tw-grid tw-grid-cols-1 md:tw-grid-cols-2'>
				<div className='tw-overflow-hidden tw-justify-center tw-flex'>
					<div className='tw-relative tw-w-full tw-mx-11 tw-mt-24 md:tw-m-0'>
						<CustomImage src={MainPhoto} alt='Profile photo' local />
					</div>
				</div>
				<div className='m-auto' style={{ padding: '15vmin' }}>
					<motion.div
						className='container tw-space-y-4'
						variants={container}
						initial={'hidden'}
						whileInView={'show'}
					>
						<motion.h1 className='fw-bold tw-text-5xl' variants={item}>
							MD Yaser Arafat <span className='txt-primary'>Israk</span>
						</motion.h1>
						<motion.div className='d-flex gap-1' variants={item}>
							{SocialLinks.map((link, index) => (
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
							className='font2 tw-text-gray-400 tw-text-xl'
							variants={item}
						>{`// 2+ years of experience`}</motion.p>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
