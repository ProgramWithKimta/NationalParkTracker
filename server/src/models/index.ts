// server/src/models/index.ts
import { Sequelize } from 'sequelize';
import { User } from './user'; // Adjust if necessary, based on your actual model file

const sequelize = new Sequelize('npdtracker_db', 'user', 'password', {
  host: 'localhost',
  dialect: 'postgres',
});

const models = {
  User: User(sequelize),  // Ensure the model is properly initialized here
};

export { sequelize, models };  // Export the sequelize instance and models
