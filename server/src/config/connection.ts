import dotenv from 'dotenv';
import { Sequelize } from 'sequelize';

// Load the .env file from the server directory
dotenv.config({ path: '/Users/hoa/NationalParkTracker/server/.env' });

const sequelize = new Sequelize({
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: Number(process.env.DB_PORT),
  dialect: 'postgres', // Assuming you're using PostgreSQL
});

export default sequelize;