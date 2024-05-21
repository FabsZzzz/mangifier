import { json } from '@sveltejs/kit';

export async function POST({ request }) {
	try {
		const file = await request.blob();

		const formData = new FormData();
		formData.append('file', file);

		const apiUrl = process.env.ML_API_URL || 'http://localhost:3000';

		const response = await fetch(`${apiUrl}/api/analyze`, {
			method: 'POST',
			body: formData
		});

		const data = await response.json();
		return json(data);
	} catch (error) {
		return json({ error: 'Something went wrong. Please try again later.' });
	}
}
