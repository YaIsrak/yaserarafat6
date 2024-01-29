'use client';

import { InstagramPostProps } from '@/type.typing';
import { useEffect, useState } from 'react';
export default function useInstagramFeed() {
	const [restAPI, setRestAPI] = useState(
		`https://yaserisrak.vercel.app/api/instagram`
	);
	const [InstaQuery, setInstaQuery] = useState<InstagramPostProps>();
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);

	useEffect(() => {
		async function fetchData() {
			setLoading(true);
			const res = await fetch(restAPI)
				.then((res) => res.json())
				.then((res) => {
					setInstaQuery(res);
					setLoading(false);
				})
				.catch((error) => {
					setLoading(false);
					setError(error);
				});
		}
		fetchData();
	}, [restAPI]);

	return {
		InstaQuery,
		loading,
		error,
		setRestAPI,
	};
}
