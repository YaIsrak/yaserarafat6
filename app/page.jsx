import HomeSec from './HomeSec';
import HomeSec3 from './HomeSec3';
import HomeSec2 from './HomeSec2';
import HomeSec4 from './HomeSec4';
import HomeSec5 from './HomeSec5';
import Sketchbooks from './sketchbooks';
import HomeSec6 from './HomeSec6';

export default function Home() {
	return (
		<>
			<HomeSec />
			<hr />
			<>
				<HomeSec2 /> {/* grace and beauty*/}
				<hr />
				<HomeSec3 /> {/* Kohotobyo */}
				<HomeSec4 /> {/* Spirited away */}
				<HomeSec5 /> {/* Nandita */}
				<hr />
				<HomeSec6 />
				<div className='container'>
					<h1 className='display-3 tw-text-center'>Sketchbook tour</h1>
					<Sketchbooks homepage={true} />
				</div>
			</>
		</>
	);
}
