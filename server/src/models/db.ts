// server/src/models/db.ts

import { Sequelize } from 'sequelize';

// Create an instance of Sequelize, adjust the configuration as needed
export const sequelize = new Sequelize({
  dialect: 'postgres',
  host: 'localhost',  // or use the host of your database
  username: 'your_db_username',
  password: 'your_db_password',
  database: 'npdtracker_db',  // Your database name
});
