'use client';

import { useState } from 'react';
import sanityClient from '../client';

// export default function usePosts(url) {
// 	const [posts, setPosts] = useState([]);

// 	// error handaling
// 	const [loading, setLoading] = useState(true);
// 	const [error, setError] = useState(false);

// 	useEffect(() => {
// 		fetch(url)
// 			.then((res) => res.json())
// 			.then((data) => {
// 				setPosts(data);
// 				setLoading(false);
// 			})
// 			.catch((error) => {
// 				setLoading(false);
// 				setError(error);
// 			});
// 	}, [url]);
// 	return {
// 		posts,
// 		loading,
// 		error,
// 	};
// }

export default async function useData(groq) {
	const fetch = await getData();
	const [datas, setData] = useState([]);
	setData(fetch.props.datas);

	return datas;
}

async function getData() {
	const res = await sanityClient.fetch(groq);

	return {
		props: {
			datas: res,
		},
		revalidate: 10,
	};
}
