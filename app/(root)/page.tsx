import HomeSec1 from '@/components/Section/Home/Section1';
import HomeSec2 from '@/components/Section/Home/Section2';
import HomeSec3 from '@/components/Section/Home/Section3';
import HomeSec4 from '@/components/Section/Home/Section4';
import HomeSec5 from '@/components/Section/Home/Section5';
import HomeSec6 from '@/components/Section/Home/Section6';
import Sketchbooks from '@/components/Section/Sketchbooks';

export default function Home() {
	return (
		<>
			<HomeSec1 />
			<hr />
			<HomeSec2 />
			<HomeSec3 />
			<HomeSec4 />
			<HomeSec5 />
			<HomeSec6 />
			<div className='container tw-text-center'>
				<h1 className='display-3 tw-font-bold'>Sketchbook tour</h1>
				<Sketchbooks homepage={true} />
			</div>
		</>
	);
}
