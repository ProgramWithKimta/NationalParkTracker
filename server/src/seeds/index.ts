import bcrypt from 'bcryptjs';
import User from '../models/userdata.js'

const seedUsers = async () => {
    try {
      const hashedPassword = await bcrypt.hash('password123', 10);  // Hash the password
  
      await User.bulkCreate([
        {
          username: 'john_doe',
          password_hash: hashedPassword, // Use hashed password
          email: 'john_doe@example.com',
        },
        {
          username: 'jane_doe',
          password_hash: hashedPassword, // Use hashed password
          email: 'jane_doe@example.com',
        },
      ]);
  
      console.log("Users seeded successfully!");
    } catch (err) {
      console.error("Error seeding users:", err);
    }
  };
  
  seedUsers();
