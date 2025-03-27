'use client';

import { cn } from '@/lib/utils';
import { motion } from 'motion/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function NavLink({
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
