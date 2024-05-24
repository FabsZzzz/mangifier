import { error, json } from '@sveltejs/kit';
import { toDate } from '$lib/utils/helper';
import { lucia } from '$lib/server/auth';
import { db } from '$lib/server/db';
import { analysis } from '$lib/server/db/schema/analysis.js';
import { and, eq, like, lt, asc, desc, gte, or } from 'drizzle-orm';

export async function GET({ locals, url, cookies }) {
	const sessionId = cookies.get(lucia.sessionCookieName);

	if (!sessionId) {
		error(401, 'Unauthorized');
	}

	const { user } = await lucia.validateSession(sessionId);
	if (!user) {
		error(401, 'Unauthorized');
	}

	const search = url.searchParams.get('search');
	const dateStr = url.searchParams.get('date');

	if (search === null) {
		error(400, 'search parameter is required');
	}

	if (dateStr === null) {
		error(400, 'date parameter is required');
	}

	const tomorrow = toDate(dateStr);
	if (!tomorrow) {
		error(400, 'Invalid date parameter');
	}

	tomorrow.setDate(tomorrow.getDate() + 1);

	const today = toDate(dateStr);
	if (!today) {
		error(400, 'Invalid date parameter');
	}

	let result;

	if (search === '') {
		result = await db
			.select()
			.from(analysis)
			.where(
				and(
					eq(analysis.userId, user.id),
					lt(analysis.createdAt, tomorrow),
					gte(analysis.createdAt, today)
				)
			)
			.execute();
	} else {
		result = await db
			.select()
			.from(analysis)
			.where(
				and(
					eq(analysis.userId, user.id),
					lt(analysis.createdAt, tomorrow),
					gte(analysis.createdAt, today),
					like(analysis.label, `%${search}%`)
				)
			)
			.execute();
	}

	return json(result);
}
