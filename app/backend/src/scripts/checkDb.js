const db = require('../config/db');

async function checkDb() {
  try {
    const [users] = await db.query('SELECT id, name, email, role FROM users');
    console.log('USERS IN DB:');
    console.log(users);
    
    const [desc] = await db.query('DESCRIBE users');
    console.log('USERS TABLE STRUCTURE:');
    console.log(desc);
    
    process.exit(0);
  } catch (error) {
    console.error('Error checking DB:', error);
    process.exit(1);
  }
}

checkDb();
