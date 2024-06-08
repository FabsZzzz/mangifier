import { relations } from 'drizzle-orm';
import { integer, real, sqliteTable, text } from 'drizzle-orm/sqlite-core';
import { user } from './user';

export const analysis = sqliteTable('analyses', {
	id: text('id', { length: 100 }).primaryKey(),
	userId: text('user_id', { length: 100 }).notNull(),
	label: text('label', { length: 255 }).notNull(),
	score: real('score').notNull(),
	imageUrl: text('image_url', { length: 255 }).notNull(),
	cloudinaryId: text('cloudinary_id', { length: 255 }),
	createdAt: integer('created_at', { mode: 'timestamp' }).notNull()
});

export const analysisRelations = relations(analysis, ({ one }) => ({
	user: one(user, {
		fields: [analysis.userId],
		references: [user.id]
	})
}));
