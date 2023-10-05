import Spinner from './spinner';

export default function loading() {
	return (
		<div className='tw-h-screen tw-w-full tw-flex tw-justify-center tw-items-center'>
			<Spinner />
		</div>
	);
}
