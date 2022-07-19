import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// component
import Layout from './components/Layout';
import About from './components/pages/About';
import Home from './components/pages/Home';

function App() {
	return (
		<Router>
			<Layout>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/about' element={<About />} />
					<Route
						path='*'
						element={
							<>
								<h1>Page not Found</h1>
							</>
						}
					/>
				</Routes>
			</Layout>
		</Router>
	);
}

export default App;
