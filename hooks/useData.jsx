export default async function useData() {
	const data = await getData();

	return { data };
}

async function getData() {
	const res = await fetch('https://api.slingacademy.com/v1/sample-data/photos');
	return res.json();
}
