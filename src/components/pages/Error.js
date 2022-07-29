import { useContext } from 'react';
import { ThemeContext } from '../../App';

export default function Home() {
	const { theme } = useContext(ThemeContext);
	return (
		<div className={`bg-${theme.bg}`} style={{ height: '100vh' }}>
			<div className='position-absolute top-50 start-50 translate-middle text-center'>
				<h1 className='h1 text-red-500'>Page not found 👻</h1>
				<a href='/' className='text-indigo-500 underline'>
					Back to home 🏠
				</a>
			</div>
		</div>
	);
}
