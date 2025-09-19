'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { CustomEase } from 'gsap/CustomEase';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import React, { ElementType, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger, SplitText, CustomEase);

interface Props {
	children: React.ReactNode;
	className?: string;
	y?: number;
	opacity?: number;
	duration?: number;
	delay?: number;
	stagger?: number;
	isMask?: boolean;
	blur?: number;
	repeatOnScroll?: boolean;
	markers?: boolean;
	as?: ElementType;
	by?: 'chars' | 'words' | 'lines';
	start?: string;
}

export default function TextRevealByMask({
	children,
	className,
	y = 100,
	opacity = 0,
	delay = 0,
	duration = 0.8,
	stagger = 0.05,
	isMask = true,
	blur = 15,
	repeatOnScroll = true,
	markers = false,
	as: Component = 'p',
	by = 'lines',
	start = 'top 80%',
}: Props) {
	const containerRef = useRef<HTMLDivElement>(null);
	const textRef = useRef<HTMLDivElement>(null);

	useGSAP(() => {
		gsap.context(() => {
			if (!textRef.current) return;

			CustomEase.create('myEase', 'M0,0 C1,0 0,1 1,1');

			const split = new SplitText(textRef.current, {
				type: by,
				mask: isMask ? by : undefined,
			});

			gsap.from(split[by], {
				// almost every configation comes from props
				yPercent: y,
				filter: `blur(${blur}px)`,
				delay,
				opacity,
				duration,
				stagger,
				// ease: 'power3.out',
				ease: 'myEase',
				scrollTrigger: {
					trigger: containerRef.current,
					start: start,
					markers: markers,
					toggleActions: repeatOnScroll
						? 'play restart play reverse' //could be play none none reverse
						: 'play none none none', // Play on enter, reset on leave
				},
			});

			return () => {
				split.revert();
			};
		}, containerRef);
	});

	return (
		<div
			ref={containerRef}
			className={className}>
			{/* @ts-ignore */}
			<Component
				// @ts-ignore
				ref={textRef as unknown as React.Ref<HTMLElement>}
				// @ts-ignore
				className={className}>
				{children}
			</Component>
		</div>
	);
}
