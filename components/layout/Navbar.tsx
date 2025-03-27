'use client';

import { navlinks } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { motion } from 'motion/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import MenuIcon from '../menu-icon';
import { VariableFontHover } from '../ui/variable-font-hover';

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<nav
			className={cn(
				'sticky top-0 left-0 w-full  border-muted-foreground/20 backdrop-blur-sm text-white md:text-dark transition ease-[cubic-bezier(1,0,0,1)] duration-500 md:bg-transparent md:backdrop-blur-none md:mix-blend-difference',
				isOpen ? 'bg-dark/90 rounded-b-3xl' : 'bg-dark/25 rounded-b-none',
			)}>
			<div className='container mx-auto px-2 md:px-0 grid grid-cols-4 py-4 md:py-2 items-center'>
				<Link href='/'>
					<VariableFontHover
						label='ISRAK'
						className='font-semibold text-sm'
						fromFontVariationSettings="'wght' 600, 'slnt' 0"
					/>
				</Link>

				<div className='md:flex items-center justify-end gap-8 col-span-2 hidden'>
					{navlinks.map(({ name, href }) => (
						<NavLink
							key={name}
							href={href}
							className='uppercase text-xs font-medium'
							label={name}
						/>
					))}
				</div>

				<div className='md:flex justify-end hidden'>
					<NavLink
						href='#contact'
						className='text-xs font-semibold'
						label={'Contact'}
						borderClassName='bg-primary'
					/>
				</div>

				{/* appeare on mobile menu */}
				<div className='md:hidden flex justify-end col-span-3'>
					<button
						className='group cursor-pointer'
						onClick={() => setIsOpen((prevState) => !prevState)}
						aria-expanded={isOpen}
						aria-label={isOpen ? 'Close menu' : 'Open menu'}>
						<MenuIcon className='size-6' />
					</button>
				</div>

				{/* appeare on mobile menu */}
				<motion.div
					className={cn('overflow-hidden col-span-3')}
					initial={{ height: 0 }}
					animate={{ height: isOpen ? 'auto' : 0 }}
					transition={{
						duration: 0.5,
						ease: [1, 0, 0, 1],
					}}>
					<div className='mt-8 flex flex-col gap-2 mb-4'>
						{navlinks.map(({ name, href }) => (
							<MobileNavLink
								key={name}
								href={href}
								className=' text-3xl font-bold'>
								{name}
							</MobileNavLink>
						))}

						<Link
							href='#contact'
							className=' text-3xl font-bold'>
							Contact
						</Link>
					</div>
				</motion.div>
			</div>
		</nav>
	);
}

export function NavLink({
	href,
	label,
	className,
	borderClassName,
}: {
	href: string;
	label: string;
	className?: string;
	borderClassName?: string;
}) {
	const [isHovered, setIsHovered] = useState(false);
	const pathname = usePathname();

	const isActive = pathname === href;

	return (
		<div
			className='relative'
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}>
			<Link
				href={href}
				className={cn('relative uppercase', className)}>
				{label}
				<motion.div
					className={cn(
						'absolute left-0 -bottom-1 h-0.5 bg-dark w-full',

						borderClassName,
					)}
					initial={{ scaleX: 0, transformOrigin: 'left' }}
					animate={{
						scaleX: isActive || isHovered ? 1 : 0,
						transformOrigin: isHovered ? 'left' : 'right',
					}}
					transition={{
						duration: 0.5,
						ease: [1, 0, 0, 1],
					}}
				/>
			</Link>
		</div>
	);
}

export function MobileNavLink({
	href,
	children,
	className,
}: {
	href: string;
	children: React.ReactNode;
	className?: string;
}) {
	const pathname = usePathname();

	return (
		<Link
			href={href}
			className={cn(
				'text-3xl font-bold',
				pathname === href ? 'text-white/50' : 'text-white',
				className,
			)}>
			{children}
		</Link>
	);
}
