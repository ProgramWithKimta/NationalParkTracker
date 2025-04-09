import sequelize from '../config/connection.js';
import { CommentFactory } from './comment.js';
import { User } from './userdata.js';  // Import the User model

// Initialize the Comment model using the factory function and the Sequelize instance.
const Comment = CommentFactory(sequelize);

// Sync all models with the database (will create tables if they don't exist)
sequelize.sync({ force: false }) // `force: false` ensures it doesn't drop existing tables
  .then(() => {
    console.log('Database synced successfully!');
  })
  .catch((error) => {
    console.error('Error syncing database:', error);
  });

// Export the Sequelize instance and the initialized models for use in other parts of the application.
export { Comment, User };  // Make sure to export the User model




// import sequelize from '../config/connection.js';
// import { CommentFactory } from './comment.js';  // Import the Comment model factory function

// // Initialize the Comment model using the factory function and the Sequelize instance.
// const Comment = CommentFactory(sequelize);

// // Export the Sequelize instance and the initialized models for use in other parts of the application.
// export { Comment };
