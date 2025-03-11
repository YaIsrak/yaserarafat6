import { Loader2 } from 'lucide-react';
import { Suspense } from 'react';
import AboutMe from './_components/AboutMe';
import Hero from './_components/Hero';
import Projects_sec from './_components/Projects_sec';
export default function Home() {
	return (
		<>
			<Hero />
			<Suspense fallback={<Loader2 className='animate-spin size-4' />}>
				<Projects_sec />
			</Suspense>
			<AboutMe />
		</>
	);
}
