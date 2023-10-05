import HomeSec from './HomeSec';
import HomeSec3 from './HomeSec3';
import HomeSec2 from './HomeSec2';
import HomeSec4 from './HomeSec4';
import HomeSec5 from './HomeSec5';

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
			</>
			<hr />
		</>
	);
}
