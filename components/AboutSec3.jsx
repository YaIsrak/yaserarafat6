import PTag from './PTag';
import { motion } from 'framer-motion';

const container = {
	hidden: { opacity: 0, y: 100 },
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
	hidden: { opacity: 0, y: 100 },
	show: { opacity: 1, y: 0 },
};

export default function AboutSec3() {
	return (
		<section className='sec3'>
			<motion.div
				className='container font-mono grid gap-8'
				variants={container}
				initial='hidden'
				whileInView='show'
			>
				{/* Main Skills */}
				<div>
					<motion.h1 className='h3 fw-bold' variants={item}>
						Main Skills
					</motion.h1>
					<motion.div className='row' variants={item}>
						<motion.div className='col-3 DesignApp' variants={item}>
							<PTag>Illustration</PTag>
							<PTag>Digital Art</PTag>
						</motion.div>
						<motion.div className='col-3 DesignApp' variants={item}>
							<PTag>Photoshop</PTag>
							<PTag>Illustrator</PTag>
							<PTag>Premiere Pro</PTag>
							<PTag>Adobe XD</PTag>
						</motion.div>
						<motion.div className='col-3 DesignApp' variants={item}>
							<PTag>HTML, CSS</PTag>
							<PTag>Javascript</PTag>
							<PTag>React, node</PTag>
							<PTag>Python</PTag>
						</motion.div>

						<motion.div className='col-3 DesignApp' variants={item}>
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
					<motion.div className='row' variants={item}>
						<motion.div className='col-3' variants={item}>
							<p className='text-sm md:text-xl fw-bold text-primary'>
								Opputunity for Kids
							</p>
							<PTag>@Assosiate of Graphic Design</PTag>
							<PTag>Chittagong - Bangladesh</PTag>
							<PTag>2020 - now</PTag>
						</motion.div>
						<motion.div className='col-3' variants={item}>
							<p className='text-sm md:text-xl fw-bold text-primary'>
								Originative 360
							</p>
							<PTag>@Assosiate of Graphic Design</PTag>
							<PTag>Chittagong - Bangladesh</PTag>
							<PTag>2020 - 2022</PTag>
						</motion.div>
					</motion.div>
				</div>

				{/* busy */}
				<div>
					<motion.h1 className='h3 fw-bold' variants={item}>
						Also busy with
					</motion.h1>
					<motion.div className='row' variants={item}>
						<motion.div className='col-3' variants={item}>
							<PTag>Skecthbook</PTag>
						</motion.div>
						<motion.div className='col-3' variants={item}>
							<PTag>Accoustic Guiter</PTag>
						</motion.div>
						<motion.div className='col-3' variants={item}>
							<PTag>Video game</PTag>
						</motion.div>
					</motion.div>
				</div>
			</motion.div>
		</section>
	);
}
