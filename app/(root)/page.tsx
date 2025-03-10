import { Suspense } from 'react';
import Hero from './_components/Hero';
import Projects_sec from './_components/Projects_sec';
export default function Home() {
	return (
		<>
			<Hero />
			<Suspense>
				<Projects_sec />
			</Suspense>
		</>
	);
}
