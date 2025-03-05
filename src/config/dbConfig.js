import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();

// Check if required environment variables are set
if (
  !process.env.DB_HOST ||
  !process.env.DB_USER ||
  !process.env.DB_PASSWORD ||
  !process.env.DB_NAME
) {
  console.error("Database configuration is incomplete.");
  process.exit(1);
}

// Create a MySQL connection
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

db.connect((err) => {
  if (err) {
    console.error("Failed to connect to the database:", err);
    process.exit(1);
  }
  console.log("Connected to the database");
});

export default db;
