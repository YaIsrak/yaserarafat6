import { Github } from 'lucide-react';
import Image from 'next/image';
import Button from '../Button';

export default function WebPostCard({ data }: { data: WebDesign }) {
	return (
		<div className='tw-relative tw-scale-100 hover:tw-scale-105'>
			{/* Image */}
			<div className='tw-relative'>
				<Image
					src={data.mainImageUrl.url}
					alt={`WEb cover-cover | MD Yaser Arafat Israk`}
					width={400}
					height={400}
					sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
					className='tw-object-contain tw-h-96 tw-rounded-lg'
				/>
			</div>

			{/* Card body */}
			<div>
				<h2 className='h2 tw-font-bold tw-text-primary'>{data.title}</h2>
				{/* Button Group */}
				<div className='tw-flex tw-gap-2'>
					<Button link={data.url}>Visit Site</Button>
					{data.github && (
						<Button link={data.github} className='tw-flex tw-align-middle tw-gap-1'>
							<Github />
							Github
						</Button>
					)}
				</div>
				{/* Tech */}
				<div className='my-4'>
					<p className='tw-text-xl tw-font-semibold tw-text-light'>Technologies:</p>
					<div className='tw-grid tw-grid-cols-2'>
						{data.technology.map((tech) => (
							<p className='text-muted' key={tech._id}>
								{tech.name}
							</p>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
