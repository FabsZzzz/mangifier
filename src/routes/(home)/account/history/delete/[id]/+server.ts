import { error, json } from '@sveltejs/kit';
import type { RequestHandler } from '../$types';
import { db } from '$lib/server/db';
import { analysis } from '$lib/server/db/schema';
import { cloudinary } from '$lib/upload/cloudinary';
import { eq } from 'drizzle-orm';

export const DELETE: RequestHandler = async ({ locals, params }) => {
	const user = locals.user;
	if (!user) {
		error(401, 'Unauthorized');
	}

	const result = await db
		.delete(analysis)
		.returning({ cloudinaryId: analysis.cloudinaryId })
		.where(eq(analysis.id, params.id));

	if (result.length > 0) {
		const current = result[0];
		if (current.cloudinaryId) {
			cloudinary.uploader.destroy(current.cloudinaryId, function () {
				console.log('Deleted image', current.cloudinaryId);
			});
		}
	}

	return json({ success: true, id: params.id });
};
