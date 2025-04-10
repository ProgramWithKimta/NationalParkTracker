import dotenv from 'dotenv';
import { Sequelize } from 'sequelize';


// Load the .env file from the server directory
dotenv.config();


const sequelize = new Sequelize(process.env.DATABASE_URL!, {
  port: Number(process.env.DB_PORT ?? 5432), // Default to 5432 for PostgreSQL
  dialect: 'postgres', // Assuming you're using PostgreSQL
});

export default sequelize;

// import dotenv from 'dotenv';
// import { Sequelize } from 'sequelize';


// // Load the .env file from the server directory
// dotenv.config();


// const sequelize = new Sequelize({
//   host: process.env.DB_HOST ?? 'localhost', // Default to 'localhost' if undefined
//   database: process.env.DB_NAME ?? 'npdtracker_db',
//   username: process.env.DB_USER ?? 'postgres',
//   password: process.env.DB_PASSWORD ?? 'password',
//   port: Number(process.env.DB_PORT ?? 5432), // Default to 5432 for PostgreSQL
//   dialect: 'postgres', // Assuming you're using PostgreSQL
// });

// export default sequelize;
