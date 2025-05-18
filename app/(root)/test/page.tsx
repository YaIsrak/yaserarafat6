import TextRevealAnimation from '@/components/ui/TextRevealByMask';

export default function TestPage() {
	return (
		<>
			<div className='flex items-center justify-center w-full min-h-screen'>
				<div className='container mx-auto space-y-4'>
					{/* mask */}
					<div>
						<p data-cursor='hover'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Error earum ratione animi laborum dolorum beatae fugiat
							architecto totam corporis veritatis placeat molestias
							consequatur unde iure magni, soluta illum. Illo molestias
							id minus eligendi quo. Quae nostrum labore minima, eos
							error laborum quis dolorum, ratione similique cupiditate
							dolores quibusdam rem officiis!
						</p>
					</div>
					{/* body */}
					<div>
						<p>
							eos error laborum quis dolorum, ratione similique
							cupiditate dolores quibusdam rem officiis!
						</p>
					</div>
				</div>
			</div>
			<div className='flex items-center justify-center w-full min-h-screen'>
				<div className='container mx-auto space-y-4'>
					<TextRevealAnimation>
						<p className='split-text text-center'>
							Use SplitText to split an HTML element's text into
							individual characters, words, and/or lines to create
							gorgeous staggered animations. It's highly configurable and
							smarter than other text splitting tools thanks to features
							like automatic screen reader accessibility, masking for
							reveal effects, responsive re-splitting, and much more.
						</p>
						<p>
							eos error laborum quis dolorum, ratione similique
							cupiditate dolores quibusdam rem officiis!
						</p>
						<h1 className='text-3xl font-bold'>Hello world</h1>
					</TextRevealAnimation>
					<p>
						eos error laborum quis dolorum, ratione similique cupiditate
						dolores quibusdam rem officiis!
					</p>
				</div>
			</div>
		</>
	);
}
