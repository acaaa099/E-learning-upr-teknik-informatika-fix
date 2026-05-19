const db = require('../config/db');
const bcrypt = require('bcryptjs');

async function hashExistingPasswords() {
  try {
    console.log('Fetching users from database...');
    const [users] = await db.query('SELECT * FROM users');
    
    console.log(`Found ${users.length} users.`);
    let updatedCount = 0;

    for (const user of users) {
      // Check if password is not already hashed (bcrypt hashes start with $2)
      if (!user.password.startsWith('$2')) {
        console.log(`Hashing password for user: ${user.email}`);
        
        const hashedPassword = await bcrypt.hash(user.password, 10);
        
        await db.query(
          'UPDATE users SET password = ? WHERE id = ?',
          [hashedPassword, user.id]
        );
        
        updatedCount++;
      }
    }

    console.log(`Successfully hashed ${updatedCount} passwords.`);
    process.exit(0);
  } catch (error) {
    console.error('Error hashing passwords:', error);
    process.exit(1);
  }
}

hashExistingPasswords();
