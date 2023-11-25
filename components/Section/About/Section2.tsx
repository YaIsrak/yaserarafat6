'use client';

import PTag from '@/components/PTag';
import { container, experiences, item } from '@/lib/constantData';

import { motion } from 'framer-motion';

export default function AboutSec2() {
	return (
		<section className='sec3'>
			<motion.div
				className='container tw-font-mono tw-grid tw-gap-8'
				variants={container}
				initial='hidden'
				whileInView='show'
			>
				{/* Main Skills */}
				<div>
					<motion.h1 className='h3 fw-bold' variants={item}>
						Main Skills
					</motion.h1>
					<motion.div
						className='tw-grid tw-grid-cols-3 md:tw-grid-cols-4 tw-gap-3'
						variants={container}
					>
						<motion.div className='DesignApp' variants={item}>
							<PTag>Illustration</PTag>
							<PTag>Digital Art</PTag>
						</motion.div>
						<motion.div className='DesignApp' variants={item}>
							<PTag>Photoshop</PTag>
							<PTag>Illustrator</PTag>
							<PTag>Premiere Pro</PTag>
							<PTag>Adobe XD</PTag>
						</motion.div>
						<motion.div className='DesignApp' variants={item}>
							<PTag>HTML, CSS</PTag>
							<PTag>Javascript</PTag>
							<PTag>React, node</PTag>
							<PTag>Python</PTag>
						</motion.div>

						<motion.div className='DesignApp' variants={item}>
							<PTag>Frontend</PTag>
							<PTag>UI design</PTag>
						</motion.div>
					</motion.div>
				</div>

				{/* Experience */}
				<div>
					<motion.h1 className='h3 fw-bold' variants={item}>
						Experiences
					</motion.h1>
					<motion.div
						className='tw-grid tw-grid-cols-2 md:tw-grid-cols-3 tw-gap-3'
						variants={container}
					>
						{experiences.map((exp, i) => (
							<motion.div className='' variants={item} key={i}>
								<a
									className='tw-text-sm md:tw-text-xl fw-bold txt-primary tw-no-underline'
									href={exp.link}
									target={'_blank'}
								>
									{exp.name}
								</a>
								<PTag>@{exp.post}</PTag>
								<PTag>{exp.location}</PTag>
								<PTag>{exp.time}</PTag>
							</motion.div>
						))}
					</motion.div>
				</div>

				{/* busy */}
				<div>
					<motion.h1 className='h3 fw-bold' variants={container}>
						Also busy with
					</motion.h1>
					<motion.div
						className='tw-grid tw-grid-cols-3 md:tw-grid-cols-4 tw-gap-3'
						variants={item}
					>
						<motion.div className='' variants={item}>
							<PTag>Skecthbook</PTag>
							<PTag>Accoustic Guiter</PTag>
							<PTag>Video game</PTag>
							<PTag>Watching F.R.I.E.N.D.S.</PTag>
						</motion.div>
						<motion.div className='' variants={item}></motion.div>
						<motion.div className='' variants={item}></motion.div>
					</motion.div>
				</div>
			</motion.div>
		</section>
	);
}
