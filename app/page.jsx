import Navbar from '../components/Nav';
import Footer from './Footer';
import HomeSec from './HomeSec';
import HomeSec2 from './HomeSec2';
import HomeSec3 from './HomeSec3';
import HomeSec4 from './HomeSec4';
import HomeSec5 from './HomeSec5';
import HomeSec6 from './HomeSec6';
import Sketchbooks from './sketchbooks';

export default function Home() {
	return (
		<>
			<Navbar />
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
					<div className='container tw-text-center'>
						<h1 className='display-3 tw-font-bold'>Sketchbook tour</h1>
						<Sketchbooks homepage={true} />
					</div>
				</>
			</>
			<Footer />
		</>
	);
}
