import '../../scss/custom.css';
import '../../scss/index.css';

import HomeSec1 from '../HomeSec1';
import PorfolioSec1 from '../PorfolioSec1';
import PortfolioSec3 from '../PortfolioSec3';
// import PorfolioSec2 from '../PorfolioSec2';

export default function Home() {
	return (
		<>
			<HomeSec1 />
			<hr />
			<PorfolioSec1 />
			<hr />
			<PortfolioSec3 />
		</>
	);
}
