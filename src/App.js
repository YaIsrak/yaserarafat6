import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// component
import Layout from './components/Layout';
import About from './components/pages/About';
import Blogs from './components/pages/Blogs';
import Error from './components/pages/Error';
import Home from './components/pages/Home';
import Portfolio from './components/pages/Portfolio';
import useTheme from './Hooks/useTheme';

export const ThemeContext = React.createContext();

function App() {
	const { theme, switchTheme } = useTheme();

	return (
		<Router>
			<ThemeContext.Provider value={{ theme, switchTheme }}>
				<Layout>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/about' element={<About />} />
						<Route path='/blog' element={<Blogs />} />
						<Route path='/portfolio' element={<Portfolio />} />
						<Route path='*' element={<Error />} />
					</Routes>
				</Layout>
			</ThemeContext.Provider>
		</Router>
	);
}

export default App;
