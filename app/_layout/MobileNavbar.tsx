'use client';

import useScroll from '@/lib/hooks/useScroll';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import NavbarMenu from './NavbarMenu';

export default function MobileNavbar() {
	const [isOpen, setIsOpen] = useState(false);
	const scrolled = useScroll(30);

	return (
		<div className='z-[3000] '>
			<div
				onClick={() => setIsOpen((prev) => !prev)}
				className='relative z-[3500]'
			>
				<Menu
					className={cn(
						'transition-all absolute -translate-y-1/2 -translate-x-1/2',
						isOpen ? 'rotate-180 scale-0' : 'rotate-0 scale-100'
					)}
				/>
				<X
					className={cn(
						'transition-all absolute -translate-y-1/2 -translate-x-1/2',
						isOpen ? 'scale-100 rotate-0' : 'rotate-180 scale-0'
					)}
				/>
			</div>

			<div
				className={cn(
					'fixed top-0 left-0 bg-background/40 h-screen w-full !backdrop-blur-xl overflow-hidden transition-all flex justify-center items-center',
					isOpen ? 'w-full' : 'w-0',
					scrolled && 'bg-background'
				)}
			>
				<div className='py-6 flex flex-col gap-4 text-center text-4xl font3'>
					<NavbarMenu />
				</div>
			</div>
		</div>
	);
}
