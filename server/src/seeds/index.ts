import bcrypt from 'bcryptjs';
import User from '../models/userdata.js'
import sequelize from '../config/connection.js';

const seedUsers = async () => {
    try {
      const hashedPassword = await bcrypt.hash('password123', 10);  // Hash the password
      await sequelize.sync ({force: true})
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
      process.exit(0)
    } catch (err) {
      console.error("Error seeding users:", err);
      process.exit(1)
    }
  };
  
  seedUsers();
