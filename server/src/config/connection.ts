import dotenv from 'dotenv';
import { Sequelize } from 'sequelize';

const result = dotenv.config({ path: 'c:/Users/marlo/repos/projects/NationalParkTracker/.env' });


if (result.error) {
  console.error("Error loading .env file:", result.error);
} else {
  console.log(".env file loaded successfully:", result.parsed);
}

console.log("DB_HOST:", process.env.DB_HOST);
console.log("DB_NAME:", process.env.DB_NAME);
console.log("DB_PORT:", process.env.DB_PORT);
console.log("DB_USER:", process.env.DB_USER);
console.log("DB_PASSWORD:", process.env.DB_PASSWORD);

// Initialize Sequelize with environment variables
const sequelize = new Sequelize(
  process.env.DB_NAME || 'npdtracker_db', // Default database name
  process.env.DB_USER || 'postgres', // Default user
  process.env.DB_PASSWORD || 'password', // Default password
  {
    host: process.env.DB_HOST || 'localhost', // Default host
    port: Number(process.env.DB_PORT) || 5432, // Default port
    dialect: 'postgres',
  }
);

export default sequelize;