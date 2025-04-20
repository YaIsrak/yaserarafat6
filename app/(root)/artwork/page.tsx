import GridLines from '@/components/ui/GridLines';
import { Metadata } from 'next';
import GallerySection from '../_components/gallery-section';

export const metadata: Metadata = {
	title: 'Artwork',
};

export default async function ArtworkPage() {
	return (
		<>
			<GallerySection />
			<GridLines className='-z-10' />
		</>
	);
}
