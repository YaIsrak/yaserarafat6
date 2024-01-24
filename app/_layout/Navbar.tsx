'use client';
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTrigger,
} from '@/components/ui/sheet';
import useScroll from '@/lib/useScroll';
import { cn } from '@/lib/utils';
import { Menu } from 'lucide-react';
import NavbarBrand from './NavbarBrand';
import NavbarMenu from './NavbarMenu';

export default function Navbar() {
	const scolled = useScroll(30);
	return (
		<nav
			className={cn(
				'fixed top-0 w-full flex justify-center z-30 transition-all',
				scolled ? 'border-b bg-background/50 backdrop-blur-xl' : 'bg-background/0'
			)}
		>
			<div className='container flex h-16 items-center justify-between w-full'>
				<NavbarBrand />

				{/* pc menu */}
				<div className='hidden md:flex gap-8'>
					<NavbarMenu />
				</div>

				{/* Mobile menu */}
				<div className='block md:hidden'>
					<Sheet>
						<SheetTrigger>
							<Menu />
						</SheetTrigger>
						<SheetContent className='!bg-background/20 !backdrop-blur-lg'>
							<SheetHeader>
								<NavbarBrand />
							</SheetHeader>
							<div className='py-6 flex flex-col gap-4'>
								<NavbarMenu />
							</div>
						</SheetContent>
					</Sheet>
				</div>
			</div>
		</nav>
	);
}
