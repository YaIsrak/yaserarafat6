'use client';

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { navlinks } from '@/lib/constant';
import { cn } from '@/lib/utils';
import { NavLinkProps } from '@/type.typing';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavbarMenu() {
	const pathname = usePathname();
	return (
		<>
			{navlinks.map((navLink, i) => (
				<span key={i} className='flex cursor-pointer'>
					{!navLink.dropDownContent ? (
						<NavLink navLink={navLink} />
					) : (
						<NavDropDownLink navLink={navLink} />
					)}
				</span>
			))}
		</>
	);
}

function NavLink({ navLink }: { navLink: NavLinkProps }) {
	const pathname = usePathname();
	return (
		<Link
			href={navLink.href}
			className={cn(
				'mx-auto',
				navLink.href === pathname
					? 'text-primary line-through'
					: 'text-secondary-foreground'
			)}
		>
			{navLink.name}
		</Link>
	);
}

function NavDropDownLink({ navLink }: { navLink: NavLinkProps }) {
	const pathname = usePathname();
	return (
		<DropdownMenu>
			<DropdownMenuTrigger className='flex items-center gap-2'>
				{navLink.name} <ChevronDown className='w-5 h-5' />
			</DropdownMenuTrigger>
			<DropdownMenuContent className='bg-background/50 backdrop-blur-lg'>
				{navLink.dropDownContent?.map((dropDownContent, i) => (
					<DropdownMenuItem
						key={i}
						className={cn(
							'hover:!text-secondary-foreground hover:!bg-primary/50',
							dropDownContent.href === pathname
								? 'text-primary'
								: 'text-secondary-foreground'
						)}
					>
						<Link href={dropDownContent.href}>{dropDownContent.name}</Link>
					</DropdownMenuItem>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
