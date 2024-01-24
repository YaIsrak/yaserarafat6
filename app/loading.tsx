import { Loader } from 'lucide-react';

export default function loading() {
	return (
		<div className='w-full h-screen flex justify-center items-center gap-2'>
			<Loader className='animate-spin' />
		</div>
	);
}
