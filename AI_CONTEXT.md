# IMAGINEX POS Core - AI Coding Context

You are an expert full-stack developer assisting the IMAGINEX engineering team in building "IMAGINEX POS Core v1.0.0". 
Keep this context active at all times. Do not hallucinate or suggest external libraries outside of the defined stack.

---

## 🎯 High-Level Principles

1. **Reusability (Product Mindset)**: Do not write hardcoded shop details. Use configuration files/local settings for things like shop name, logo, currency, and VAT. This is a core product to be resold.
2. **Offline-First & Speed**: SQLite (`Better-SQLite3` with `Drizzle ORM`) is the single source of truth. Performance is critical. Keep UI interactions sub-100ms.
3. **Simplicity Over Over-Engineering**: The target user has low digital literacy. Keep buttons large, the UI highly visual (using icons), and minimize complex nested settings. Use Sinhala text tags where necessary.
4. **Safety First**: Database corruptions ruin businesses. Always write operations within transactions where applicable, and structure background automatic backups safely.

---

## 🛠️ Technology Specification

- **Shell**: Electron (v30+)
- **Frontend**: React 18, Vite, TypeScript, Tailwind CSS, shadcn/ui (Lucide React for icons)
- **Database**: Better-SQLite3 (local file `pos.db` located inside `%AppData%/imaginex-pos/`)
- **ORM**: Drizzle ORM (Type-safe query builder)
- **Validation**: Zod (for forms and API payload parsing)
- **Installer**: Electron Builder (Targeting Windows `.exe`)

---

## 🧑‍💻 Coding Standards & Patterns

- Use **Functional Components** with hooks.
- Use **Drizzle ORM** schemas for queries. Do not write raw SQL unless absolutely necessary for performance optimization.
- Store image assets outside the DB. Put uploaded product images in an external OS folder and save only the relative path (`image_path`) in the SQLite database.
- Use **Electron IPC (Inter-Process Communication)** properly. Never run database queries directly in the renderer process. All database operations must happen in the Main process and be exposed securely via `preload.js` contextBridge.

---

## 📂 Database Schema Overview (To be expanded)

- `products`: id, part_number, name, category_id, cost_price, selling_price, stock_qty, barcode, rack_location, image_path, warranty_months, status.
- `sales`: id, invoice_no, total_amount, discount, net_amount, payment_mode, created_at, cashier_id.
- `sale_items`: id, sale_id, product_id, quantity, unit_price, subtotal.
- `suppliers`: id, name, contact, company.
- `backups`: id, backup_path, status, created_at.