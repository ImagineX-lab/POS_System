import Database from 'better-sqlite3';
import { drizzle } from 'drizzle-orm/better-sqlite3';
import { app } from 'electron';
import path from 'path';
import fs from 'fs';
import * as schema from './schema';

let dbPath = 'pos.db';

if (app) {
  // Get the base %AppData% folder (Roaming on Windows, Library/Application Support on macOS, etc.)
  const appDataPath = app.getPath('appData');
  const dbDir = path.join(appDataPath, 'imaginex-pos');
  
  // Ensure the directory exists
  if (!fs.existsSync(dbDir)) {
    fs.mkdirSync(dbDir, { recursive: true });
  }
  
  dbPath = path.join(dbDir, 'pos.db');
} else {
  // Fallback to local file for migrations and development CLI tasks
  dbPath = 'pos.db';
}

const sqlite = new Database(dbPath);
export const db = drizzle(sqlite, { schema });
