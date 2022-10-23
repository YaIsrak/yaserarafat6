import Button from './Button';
import { motion } from 'framer-motion';

const container = {
	hidden: { opacity: 0, y: 100 },
	show: {
		opacity: 1,
		y: 0,
		transition: {
			staggerChildren: 0.3,
			duration: 0.001,
		},
	},
};
const item = {
	hidden: { opacity: 0, y: 100 },
	show: { opacity: 1, y: 0 },
};

export default function PortfolioSec1() {
	return (
		<div>
			<section className='sec2' id='portfolio'>
				<motion.div
					className='container'
					variants={container}
					initial='hidden'
					whileInView={'show'}
				>
					<motion.h1 className='h1 fw-bold' variants={item}>
						Digital art and art concepts
					</motion.h1>
					<motion.p className='text-muted' variants={item}>
						A collection of idea on painting and drawings 🎨
					</motion.p>
					<div className='row tw-py-6 gallery'>
						<div className='col-md-4 art art-1'>
							<motion.img
								src='https://media2.giphy.com/media/JovoDX7y0ijQ08JlJw/giphy.gif'
								alt=''
								variants={item}
							/>
						</div>
						<div className='col-md-4 art art-2'>
							<motion.img
								src='https://media2.giphy.com/media/DM0MOTH1lFk52z0vrT/giphy.gif'
								alt=''
								variants={item}
							/>
						</div>
						<div className='col-md-4 art art-3'>
							<motion.img
								src='https://media2.giphy.com/media/xnR4wTJZGNGF01oNHs/giphy.gif'
								alt=''
								variants={item}
							/>
						</div>
					</div>
					<Button link={'/portfolio/digitalart'}>See more</Button>
				</motion.div>
			</section>
		</div>
	);
}
