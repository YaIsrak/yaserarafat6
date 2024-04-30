'use client';

import useScroll from '@/lib/hooks/useScroll';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import NavbarBrand from './NavbarBrand';
import NavbarMenu from './NavbarMenu';

export default function Navbar() {
	const scolled = useScroll(30);
	const [toggleOn, setToggleOn] = useState(false);
	return (
		<>
			<nav
				className={cn(
					'fixed w-full z-30 transition-all',
					scolled
						? 'border-b border-muted-foreground/30 bg-background/50 backdrop-blur-xl'
						: 'bg-background/0',
					toggleOn && 'bg-background/0 border-none'
				)}
			>
				<div className='container flex items-center justify-center'>
					{/* Logo */}
					<span className=' flex-1'>
						<NavbarBrand />
					</span>
					{/* toogle-btn */}
					<div className='flex-1 flex justify-end'>
						{/* Burger */}
						<button
							className={cn('burger', toggleOn && 'burger_active')}
							onClick={() => setToggleOn(!toggleOn)}
						></button>
					</div>
				</div>
			</nav>

			{/* overlay */}
			<div
				className={cn(
					'fixed z-[10] w-full h-0 flex bg-[#0e0e0e]/20 backdrop-blur-xl will-change-transform overflow-hidden transition-all ease-out duration-300',
					toggleOn && 'h-screen'
				)}
			>
				{/* overlay menu */}
				<div
					className='w-full h-screen flex gap-4 flex-col justify-center items-center text-center h1 font3'
					onClick={() => setToggleOn(false)}
				>
					<NavbarMenu />
				</div>
			</div>
		</>
	);
}
