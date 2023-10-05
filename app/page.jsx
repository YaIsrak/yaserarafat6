import HomeSec from './HomeSec';
import HomeSec3 from './HomeSec3';
import HomeSec2 from './HomeSec2';
import HomeSec4 from './HomeSec4';
import HomeSec5 from './HomeSec5';
import Sketchbooks from './sketchbooks';

export default function Home() {
	return (
		<>
			<HomeSec />
			<hr />
			<>
				<HomeSec2 />
				<hr />
				<HomeSec3 />
				<hr />
				<HomeSec4 />
				<hr />
				<HomeSec5 />
				<hr />
				<div className='container'>
					<h1 className='display-3 tw-text-center'>Sketchbook tour</h1>
					<Sketchbooks />
				</div>
			</>
		</>
	);
}
