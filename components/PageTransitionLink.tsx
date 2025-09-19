'use client';

import { useTransitionRouter } from 'next-view-transitions';
import Link, { LinkProps } from 'next/link';
import React from 'react';

export default function PageTransitionLink({
	children,
	href,
	className,
	...props
}: {
	children: React.ReactNode;
	href: string;
	className?: string;
} & LinkProps) {
	const router = useTransitionRouter();

	return (
		<Link
			href={href}
			className={className}
			{...props}
			onClick={(e) => {
				e.preventDefault();
				router.push(href, {
					onTransitionReady: pageAnimation,
				});
			}}>
			{children}
		</Link>
	);
}

function pageAnimation() {
	document.documentElement.animate(
		[
			{
				opacity: 1,
				transform: 'translateY(0)',
			},
			{
				opacity: 0,
				transform: 'translateY(-35%)',
			},
		],
		{
			duration: 500,
			easing: 'cubic-bezier(1, 0, 0, 1)',
			fill: 'forwards',
			pseudoElement: '::view-transition-old(root)',
		},
	);
	document.documentElement.animate(
		[
			{
				transform: 'translateY(100%)',
			},
			{
				transform: 'translateY(0)',
			},
		],
		{
			duration: 500,
			easing: 'cubic-bezier(1, 0, 0, 1)',
			fill: 'forwards',
			pseudoElement: '::view-transition-new(root)',
		},
	);
}
