import { collection, getDocs, getFirestore } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import app from '../firebase';

export default function useBlogPost() {
	const [Blogs, setBlogs] = useState([{ title: '', content: '' }]);

	useEffect(() => {
		async function getBlogPost() {
			const db = getFirestore(app);
			const querySnapshot = await getDocs(collection(db, 'blogs'));

			try {
				querySnapshot.forEach((blog) => {
					setBlogs((prevBlogs) => {
						return [...prevBlogs, blog.data()];
					});
				});
			} catch (error) {
				console.log('error', error);
			}
		}
		getBlogPost();

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return {
		Blogs,
	};
}
