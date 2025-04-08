import User from '../models/userdata.js';  // Make sure the import is correct

const seedUsers = async () => {
  try {
    await User.bulkCreate([
      {
        username: 'john_doe',
        password: 'password123',
        email: 'john_doe@example.com',  // Include email here
      },
      {
        username: 'jane_doe',
        password: 'password456',
        email: 'jane_doe@example.com',  // Include email here
      },
    ]);
    console.log('Users seeded successfully!');
  } catch (error) {
    console.error('Error seeding users:', error);
  }
};

seedUsers();
