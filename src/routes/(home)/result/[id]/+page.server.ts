import { lucia } from '$lib/server/auth';
import { db } from '$lib/server/db';
import { analysis } from '$lib/server/db/schema';
import { redirect } from '@sveltejs/kit';
import { and, eq } from 'drizzle-orm';

export async function load({ params, cookies }) {
	const sessionId = cookies.get(lucia.sessionCookieName);

	if (!sessionId) {
		redirect(302, '/login');
	}

	const { user } = await lucia.validateSession(sessionId);
	if (!user) {
		redirect(302, '/login');
	}

	const entity = await db.query.analysis.findFirst({
		where: (analysis) => and(eq(analysis.id, params.id), eq(analysis.userId, user.id))
	});

	return {
		result: entity
	};
}
