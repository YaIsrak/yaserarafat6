import '../../scss/custom.css';
import PorfolioIntro from '../PorfolioIntro';
import PortfolioSec1 from '../PorfolioSec1';
import PorfolioSec2 from '../PorfolioSec2';
import PortfolioSec3 from '../PortfolioSec3';

export default function Portfolio() {
	return (
		<>
			<PorfolioIntro />
			<PortfolioSec1 />
			<PortfolioSec3 />
			<PorfolioSec2 />
		</>
	);
}
