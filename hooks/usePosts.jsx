import { useEffect, useState } from 'react';

export default function usePosts(url) {
	const [posts, setPosts] = useState([]);

	// error handaling
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	useEffect(() => {
		fetch(url)
			.then((res) => res.json())
			.then((data) => {
				setPosts(data);
				setLoading(false);
			})
			.catch((error) => {
				setLoading(false);
				setError(error);
			});
	}, [url]);
	return {
		posts,
		loading,
		error,
	};
}
