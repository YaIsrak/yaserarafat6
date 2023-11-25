import { Github } from 'lucide-react';
import Image from 'next/image';
import Button from '../Button';

export default function WebPost({ data }: { data: WebDesign }) {
	return (
		<div className=''>
			<div className='card bg-transparent'>
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
				<div className='card-body'>
					<h2 className='h2 tw-font-bold tw-text-primary'>{data.title}</h2>
					<div className='tw-flex tw-gap-2'>
						<Button link={data.url}>Visit Site</Button>
						<Button link={data.url} className='tw-flex tw-align-middle tw-gap-1'>
							<Github />
							Github
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}
