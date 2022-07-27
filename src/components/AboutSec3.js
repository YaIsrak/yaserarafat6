import { useContext } from 'react';
import { ThemeContext } from '../App';
import PTag from './PTag';

export default function AboutSec3() {
	const { theme } = useContext(ThemeContext);
	return (
		<section className={`sec3 bg-${theme.bg} text-${theme.text}`}>
			<div className='container font-mono grid gap-8'>
				{/* Main Skills */}
				<div>
					<h1 className='h3 fw-bold'>Main Skills</h1>
					<div className='row'>
						<div className='col-3 DesignApp'>
							<PTag>Illustration</PTag>
							<PTag>Digital Art</PTag>
						</div>
						<div className='col-3 DesignApp'>
							<PTag>Photoshop CC</PTag>
							<PTag>Illustrator CC</PTag>
							<PTag>Premiere Pro</PTag>
							<PTag>XD</PTag>
						</div>
						<div className='col-3 DesignApp'>
							<PTag>HTML, CSS</PTag>
							<PTag>Javascript</PTag>
							<PTag>React, node</PTag>
							<PTag>Python</PTag>
						</div>
						<div className='col-3 DesignApp'>
							<PTag>Frontend</PTag>
							<PTag>UI design</PTag>
						</div>
					</div>
				</div>

				{/* Experience */}
				<div>
					<h1 className='h3 fw-bold'>Experiences</h1>
					<div className='row'>
						<div className='col-3'>
							<p className='text-sm md:text-xl fw-bold text-primary'>
								Opputunity for Kids
							</p>
							<PTag>@Assosiate of Graphic Design</PTag>
							<PTag>Chittagong - Bangladesh</PTag>
							<PTag>2020 - now</PTag>
						</div>
						<div className='col-3'>
							<p className='text-sm md:text-xl fw-bold text-primary'>
								Originative 360
							</p>
							<PTag>@Assosiate of Graphic Design</PTag>
							<PTag>Chittagong - Bangladesh</PTag>
							<PTag>2020 - 2022</PTag>
						</div>
						<div className='col-3'>
							<p className='text-sm md:text-xl fw-bold text-primary'>
								Lorem Ipsum
							</p>
							<PTag>@Position</PTag>
							<PTag>Place</PTag>
							<PTag>Time Period</PTag>
						</div>
					</div>
				</div>

				{/* busy */}
				<div>
					<h1 className='h3 fw-bold'>Also busy with</h1>
					<div className='row'>
						<div className='col-3'>
							<PTag>Skecthbook</PTag>
						</div>
						<div className='col-3'>
							<PTag>Accoustic Guiter</PTag>
						</div>
						<div className='col-3'>
							<PTag>Video game</PTag>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
