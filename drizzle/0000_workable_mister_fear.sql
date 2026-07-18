CREATE TABLE `categories` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`description` text
);
--> statement-breakpoint
CREATE TABLE `products` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`part_number` text,
	`name` text NOT NULL,
	`category_id` integer,
	`cost_price` real DEFAULT 0 NOT NULL,
	`selling_price` real DEFAULT 0 NOT NULL,
	`stock_qty` integer DEFAULT 0 NOT NULL,
	`barcode` text,
	`rack_location` text,
	`image_path` text,
	`warranty_months` integer DEFAULT 0 NOT NULL,
	`status` text DEFAULT 'active' NOT NULL,
	FOREIGN KEY (`category_id`) REFERENCES `categories`(`id`) ON UPDATE no action ON DELETE set null
);
