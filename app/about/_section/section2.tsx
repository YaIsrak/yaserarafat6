import { experiences } from '@/lib/constant';

export default function Section2() {
	return (
		<section className='section'>
			<div className='container font-mono grid gap-8'>
				{/* Main Skills */}
				<div>
					<h2 className='display-3 mb-2'>Main Skills</h2>
					<div className='grid grid-cols-3 md:grid-cols-4 gap-3'>
						<div className='DesignApp'>
							<PTag>Illustration</PTag>
							<PTag>Digital Art</PTag>
						</div>
						<div className='DesignApp'>
							<PTag>Photoshop</PTag>
							<PTag>Illustrator</PTag>
							<PTag>Premiere Pro</PTag>
							<PTag>Adobe XD</PTag>
						</div>
						<div className='DesignApp'>
							<PTag>HTML, CSS</PTag>
							<PTag>Javascript</PTag>
							<PTag>React, node</PTag>
							<PTag>Python</PTag>
						</div>

						<div className='DesignApp'>
							<PTag>Frontend</PTag>
							<PTag>UI design</PTag>
						</div>
					</div>
				</div>

				{/* Experience */}
				<div>
					<h2 className='display-3 mb-2'>Experiences</h2>
					<div className='grid grid-cols-2 md:grid-cols-3 gap-3'>
						{experiences.map((exp, i) => (
							<div className='' key={i}>
								<a
									className='text-sm md:text-xl font-semibold text-primary no-underline'
									href={exp.link}
									target={'_blank'}
								>
									{exp.name}
								</a>
								<PTag>@{exp.post}</PTag>
								<PTag>{exp.location}</PTag>
								<PTag>{exp.time}</PTag>
							</div>
						))}
					</div>
				</div>

				{/* busy */}
				<div>
					<h2 className='display-3 mb-2'>Also busy with</h2>
					<div className='grid grid-cols-3 md:grid-cols-4 gap-3'>
						<div className=''>
							<PTag>Sketchbook</PTag>
							<PTag>Accoustic Guiter</PTag>
							<PTag>Video game</PTag>
							<PTag>Watching F.R.I.E.N.D.S.</PTag>
						</div>
						<div className=''></div>
						<div className=''></div>
					</div>
				</div>
			</div>
		</section>
	);
}

export function PTag({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) {
	return (
		<p className={`m-0 text-muted-foreground  text-sm md:text-lg ${className}`}>
			{children}
		</p>
	);
}
