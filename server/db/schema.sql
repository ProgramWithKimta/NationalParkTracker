-- -- DROP DATABASE
-- DROP DATABASE IF EXISTS npdtracker_db;

-- -- CREATE DATABASE
-- CREATE DATABASE npdtracker_db;

-- Create Users Table
-- Ensure the users table is created
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
