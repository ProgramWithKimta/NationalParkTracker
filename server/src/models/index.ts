import sequelize from '../config/connection.js';
import { CommentFactory } from './comment.js';  // Import the Comment model factory function

// Initialize the Comment model using the factory function and the Sequelize instance.
const Comment = CommentFactory(sequelize);

// Export the Sequelize instance and the initialized models for use in other parts of the application.
export { Comment };
