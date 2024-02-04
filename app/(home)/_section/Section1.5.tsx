'use client';

import { RevealWrapper } from 'next-reveal';

export default function Section1Point5() {
	return (
		<section className='section'>
			<div className='container'>
				<RevealWrapper
					reset
					origin='bottom'
					className='display-1 text-[5rem] text-center flex flex-col font3'
				>
					Some of <br />
					my seleted <br /> works
				</RevealWrapper>
			</div>
		</section>
	);
}
