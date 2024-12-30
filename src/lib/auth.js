import { db } from './db';
    import CryptoJS from 'crypto-js';

    export async function registerUser(userType, firstName, lastName, email, password, skills = null, hourlyRate = null) {
      const hashedPassword = CryptoJS.SHA256(password).toString();
      try {
        await db.execute({
          sql: `INSERT INTO users (user_type, first_name, last_name, email, password, skills, hourly_rate) VALUES (?, ?, ?, ?, ?, ?, ?)`,
          args: [userType, firstName, lastName, email, hashedPassword, skills, hourlyRate],
        });
        console.log('User registered successfully');
        return true;
      } catch (error) {
        console.error('Error registering user:', error);
        throw error;
      }
    }

    export async function login(email, password) {
      const hashedPassword = CryptoJS.SHA256(password).toString();
      try {
        const result = await db.execute({
          sql: 'SELECT * FROM users WHERE email = ? AND password = ?',
          args: [email, hashedPassword],
        });

        if (result.rows.length > 0) {
          return result.rows[0];
        } else {
          return null;
        }
      } catch (error) {
        console.error('Login error:', error);
        throw error;
      }
    }
