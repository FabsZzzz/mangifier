import { relations } from 'drizzle-orm';
import { integer, primaryKey, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const user = sqliteTable('users', {
	id: text('id', { length: 100 }).primaryKey(),
	provider: text('provider', { enum: ['google', 'github', 'manual'] }).notNull(),
	providerId: text('provider_id', { length: 255 }).notNull(),
	firstName: text('first_name', { length: 100 }).notNull(),
	lastName: text('last_name', { length: 100 }).notNull(),
	isAdmin: integer('is_admin', { mode: 'boolean' }).notNull(),
	email: text('email', { length: 100 }).notNull(),
	username: text('username', { length: 100 }).notNull(),
	hashPassword: text('hash_password', { length: 255 }),
	avatarUrl: text('avatar_url', { length: 255 })
});

export const session = sqliteTable('sessions', {
	id: text('id', { length: 100 }).primaryKey(),
	userId: text('user_id', { length: 100 }).notNull(),
	expiresAt: integer('expires_at').notNull()
});

export const userRelations = relations(user, ({ many }) => ({
	sessions: many(session)
}));

export const sessionRelations = relations(session, ({ one }) => ({
	user: one(user, {
		fields: [session.userId],
		references: [user.id]
	})
}));
