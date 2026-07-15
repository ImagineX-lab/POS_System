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
