CREATE TABLE `user` (
	`id` integer,
	`name` text,
	`email` text,
	`password` text,
	`role` text,
	`created_at` text DEFAULT CURRENT_TIMESTAMP,
	`updated_at` text DEFAULT CURRENT_TIMESTAMP
);
