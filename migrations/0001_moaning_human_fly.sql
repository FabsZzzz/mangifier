CREATE TABLE `analyses` (
	`id` text(100) PRIMARY KEY NOT NULL,
	`user_id` text(100) NOT NULL,
	`label` text(255) NOT NULL,
	`score` real NOT NULL,
	`image_url` text(255) NOT NULL,
	`created_at` integer NOT NULL
);
--> statement-breakpoint
DROP INDEX IF EXISTS `users_id_unique`;