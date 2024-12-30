import * as libsql from '@libsql/client';
    import CryptoJS from 'crypto-js';

    const dbUrl = 'file:./helpmepro.db';
    const authToken = '';

    export const db = libsql.createClient({ url: dbUrl, authToken });

    export async function createTables() {
      try {
        await db.execute(`
          CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_type TEXT NOT NULL,
            first_name TEXT NOT NULL,
            last_name TEXT NOT NULL,
            email TEXT UNIQUE NOT NULL,
            password TEXT NOT NULL,
            location TEXT,
            skills TEXT,
            hourly_rate REAL
          )
        `);

        await db.execute(`
          CREATE TABLE IF NOT EXISTS services (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            provider_id INTEGER NOT NULL,
            category TEXT NOT NULL,
            description TEXT NOT NULL,
            price REAL NOT NULL,
            location TEXT NOT NULL,
            FOREIGN KEY (provider_id) REFERENCES users(id)
          )
        `);

        console.log('Tables created successfully.');
      } catch (error) {
        console.error('Error creating tables:', error);
      }
    }

    createTables();
