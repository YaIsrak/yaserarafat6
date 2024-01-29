import { baseUrl } from '@/lib/utils';
import { WebDesignProps } from '@/type.typing';
import SectionHeader from '../_components/SectionHeader';
import WebDesignCard from '../_components/WebDesignCard';

export default async function page() {
	const { res } = await getWebDesignData();
	const datas: WebDesignProps[] = res;

	return (
		<section className='section'>
			<SectionHeader header='Web Development Portfolio' description='' />
			<div className='container pt-6'>
				<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
					{datas.map((data: WebDesignProps) => (
						<WebDesignCard key={data._id} data={data} />
					))}
				</div>
			</div>
		</section>
	);
}

export async function getWebDesignData() {
	const res = await fetch(`${baseUrl}/api/web-design`)
		.then((res) => res.json())
		.catch((error) => {
			throw new Error(`failed to fetch data: ${error.message}`);
		});

	return { res, revalidate: 86400 };
}

export const dynamic = 'force-dynamic';
