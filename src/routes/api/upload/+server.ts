import { lucia } from '$lib/server/auth';
import { json } from '@sveltejs/kit';
import { upload } from '$lib/upload/cloudinary';
import { db } from '$lib/server/db';
import { analysis } from '$lib/server/db/schema';
import { generateId } from 'lucia';

export async function POST({ request, cookies }) {
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

		const sessionId = cookies.get(lucia.sessionCookieName);

		if (sessionId) {
			const { user } = await lucia.validateSession(sessionId);

			if (!user) {
				return json(data);
			}

			const uploadResult = await upload(file, 'mangifier');
			if (uploadResult.error) {
				return json({ error: uploadResult.error.message });
			}

			await db
				.insert(analysis)
				.values({
					id: generateId(40),
					userId: user.id,
					label: data.label,
					score: data.score,
					imageUrl: uploadResult.secure_url,
					createdAt: new Date(Date.now())
				})
				.onConflictDoNothing({ target: analysis.id });
		}

		return json(data);
	} catch (error) {
		console.error(error);
		return json({ error: 'Something went wrong. Please try again later.' });
	}
}
