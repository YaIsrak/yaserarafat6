'use client';
import useScroll from '@/lib/hooks/useScroll';
import { cn } from '@/lib/utils';
import MobileNavbar from './MobileNavbar';
import NavbarBrand from './NavbarBrand';
import NavbarMenu from './NavbarMenu';

export default function Navbar() {
	const scolled = useScroll(30);
	return (
		<nav
			className={cn(
				'fixed top-0 w-full flex justify-center z-30 transition-all',
				scolled
					? 'border-b border-muted-foreground/30 bg-background/50 backdrop-blur-xl'
					: 'bg-background/0'
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
					{/* <Sheet>
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
					</Sheet> */}
					<MobileNavbar />
				</div>
			</div>
		</nav>
	);
}
