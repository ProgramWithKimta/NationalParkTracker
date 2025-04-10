import sequelize from './config/connection.js';
import express from 'express';
import cors from 'cors'; // Import cors
import routes from './routes/index.js';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Serves static files in the entire client's dist folder
app.use(express.static('../client/dist'));


// Enable CORS
app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:3001', 'https://nationalparktracker2.onrender.com'], // Allow only requests from this origin
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify the allowed methods
  allowedHeaders: ['Content-Type', 'Authorization'], // Specify the allowed headers
}));


app.use(express.json());
app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });
});
