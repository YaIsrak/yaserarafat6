import Navbar from '../../components/Nav';

export default function PortfolioLayout({ children }) {
	return (
		<>
			<Navbar />
			<main>{children}</main>
		</>
	);
}
