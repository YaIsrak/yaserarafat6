import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// component
import Layout from './components/Layout';
import About from './components/pages/About';
import Blogs from './components/pages/Blogs';
import Error from './components/pages/Error';
import Home from './components/pages/Home';

function App() {
	return (
		<Router>
			<Layout>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/about' element={<About />} />
					<Route path='/blog' element={<Blogs />} />
					<Route path='*' element={<Error />} />
				</Routes>
			</Layout>
		</Router>
	);
}

export default App;
