# IMAGINEX POS Core (v1.0.0)

> A lightweight, modern, offline-first Desktop POS & Inventory Management System engineered for retail and spare-parts businesses.

---

## 🚀 Key Features

- **Offline-First Architecture**: 100% operational without active internet connection. Uses local SQLite.
- **Fast Billing**: High-speed checkout customized for item searches and part-number lookups.
- **Smart Inventory**: Track thousands of items, supplier histories, low stock alerts, and variations.
- **Warranty & Repairs**: Seamless customer return and warranty management module.
- **Robust Security**: Multi-user roles (Admin, Cashier, Manager) with strict action logs.
- **Fail-Safe Backups**: One-click local backups with automated secondary cloud synchronization.

---

## 🛠️ Tech Stack

| Layer | Technology |
| :--- | :--- |
| **Desktop Shell** | Electron |
| **Frontend Framework** | React (Vite) + TypeScript |
| **Styling** | Tailwind CSS + shadcn/ui |
| **Local Database** | Better-SQLite3 |
| **ORM** | Drizzle ORM |
| **Cloud Sync (Optional)** | MongoDB Atlas (via API) |
| **Bundler / Installer** | Electron Builder |

---

## 📂 Directory Structure

```text
src/
├── main/                 # Electron main process (OS integration, window management)
├── preload/              # Electron preload scripts (secure bridge)
└── renderer/             # React Frontend
    ├── assets/           # Images, Fonts, Icons
    ├── components/       # Reusable UI Components (buttons, inputs)
    ├── features/         # Feature-based modular logic
    │   ├── billing/      # Checkout, Cart, Printing logic
    │   ├── inventory/    # Stock, Supplier, Barcodes
    │   └── reports/      # Sales, Profits, Export logic
    ├── database/         # Drizzle schema, migrations, and local db connection
    ├── utils/            # Helper functions, formatters
    └── types/            # Global TypeScript interfaces

```

---

## ⚙️ Development Setup

### Prerequisites

* Node.js (v18 or higher)
* npm or pnpm

### Getting Started

1. Clone the repository:
```bash
git clone [https://github.com/YOUR_ORG/imaginex-pos-core.git](https://github.com/YOUR_ORG/imaginex-pos-core.git)
cd imaginex-pos-core

```


2. Install dependencies:
```bash
npm install

```


3. Run in Development Mode:
```bash
npm run dev

```


4. Build Production Installer (`.exe`):
```bash
npm run build

```



---

Developed with ❤️ by **IMAGINEX**.

*Innovate, Build, and Grow.*

```

---

## Step 3: Vibe Coding සඳහා රහස් ආයුධය (`AI_CONTEXT.md`)

ප්‍රොජෙක්ට් එකේ root එකේම **`AI_CONTEXT.md`** කියලා ෆයිල් එකක් හදලා මේ පහළ තියෙන ටික ඒකට පේස්ට් කරන්න. ඔයාගේ යාළුවා AI එකත් එක්ක චැට් එක පටන් ගද්දීම කියන්න ඕනේ: **"Please read the AI_CONTEXT.md file first before writing any code"** කියලා.

```markdown
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

```

*(Cursor පාවිච්චි කරනවා නම්, මේ ෆයිල් එකම කොපි කරලා `.cursorrules` කියලා root එකේ save කරන්න.)*

---

## Step 4: Initial Project Setup & Push to Main

දැන් අපි ප්‍රොජෙක්ට් එක ස්කැෆෝල්ඩ් (Scaffold) කරලා `main` බ්‍රාන්ච් එකට පුෂ් කරමු.

ඉලෙක්ට්‍රෝනයි, රියැක්ට් එකයි එකතු කරලා ලේසියෙන්ම ස්ටාර්ට් කරන්න පුළුවන් හොඳම විදිහක් තමයි **Electron-Vite** boilerplate එක.

ටර්මිනල් එකේ මේ කමාන්ඩ් එක රන් කරන්න:

```bash
npm create @electron-vite/project imaginex-pos-core

```

**Select options:**

1. Choose **React**
2. Choose **TypeScript**
3. Choose **No** for TSConfig paths (or Yes if you like, No is simpler)
4. Add Tailwind CSS when prompted (or configure it manually)

ඊට පස්සේ අලුතින් හැදුණු ෆෝල්ඩර් එක ඇතුළට ගිහින්:

1. අර අපි හදාගත්ත `README.md` සහ `AI_CONTEXT.md` / `.cursorrules` ෆයිල් root එකට දාන්න.
2. Dependency ටික install කරගන්න:
```bash
npm install

```


3. Initial commit එක කරලා GitHub එකට push කරන්න:
```bash
git init
git add .
git commit -m "chore: initial bootstrap with electron-vite-react-ts"
git remote add origin https://github.com/YOUR_ORG/imaginex-pos-core.git
git branch -M main
git push -u origin main

```



---

## Step 5: Branching Strategy & Workflow

ප්‍රොජෙක්ට් එකේ basic setup එක `main` එකට වැටුණට පස්සේ, කට්ටිය වැඩ පටන් ගන්න කලින් **`develop`** කියලා බ්‍රාන්ච් එකක් ක්‍රියේට් කරන්න.

```bash
git checkout -b develop
git push -u origin develop

```

### 🛠️ දිනපතා වැඩ කරන Workflow එක:

1. **vibe coding කරන කෙනා** හැම තිස්සෙම `develop` බ්‍රාන්ච් එකෙන් අලුත් බ්‍රාන්ච් එකක් හදාගෙන වැඩේ පටන් ගන්නවා. (උදා: `git checkout -b billing-module`).
2. වැඩේ කරන ගමන් එයාගේ AI Assistant එකට කියනවා: *"I want to implement the local backup database query using drizzle. Read AI_CONTEXT.md for guidelines."*
3. කෝඩ් එක ලියලා ඉවර වුණාම ඒ බ්‍රාන්ච් එක `develop` එකට merge කරන්න Pull Request (PR) එකක් දානවා.
4. ටීම් එකේ අනිත් අය කෝඩ් එක review කරලා merge කරනවා.
5. හැම සතියකම අන්තිමට (Milestone එකක් ඉවර වුණාම) `develop` එක `main` එකට merge කරලා ස්ටේබල් release එකක් දානවා.

මේ විදිහට පියවරෙන් පියවර ගියොත් වැඩේ කිසිම අවුලක් නැතුව, කාලය නාස්ති වෙන්නෙත් නැතුව, උපරිම professional විදිහට කරගෙන යන්න පුළුවන්.

මීළඟ පියවර විදිහට මොකක්ද කරන්න ඕනේ? Database Schema එක ඩිසයින් කරන්න පටන් ගමුද?
