import { sqliteTable, text, integer, real } from 'drizzle-orm/sqlite-core';
import { relations } from 'drizzle-orm';

// Categories table
export const categories = sqliteTable('categories', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name').notNull(),
  description: text('description'),
});

// Products table
export const products = sqliteTable('products', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  partNumber: text('part_number'),
  name: text('name').notNull(),
  categoryId: integer('category_id').references(() => categories.id, { onDelete: 'set null' }),
  costPrice: real('cost_price').notNull().default(0),
  sellingPrice: real('selling_price').notNull().default(0),
  stockQty: integer('stock_qty').notNull().default(0),
  barcode: text('barcode'),
  rackLocation: text('rack_location'),
  imagePath: text('image_path'),
  warrantyMonths: integer('warranty_months').notNull().default(0),
  status: text('status').notNull().default('active'),
});

// Relations setup
export const categoriesRelations = relations(categories, ({ many }) => ({
  products: many(products),
}));

export const productsRelations = relations(products, ({ one }) => ({
  category: one(categories, {
    fields: [products.categoryId],
    references: [categories.id],
  }),
}));
