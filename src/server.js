// server.mjs
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import "dotenv/config";
import productRoutes from "./routes/productRoutes.js";

dotenv.config(); // Load environment variables from .env

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(
  cors({
    origin: (origin, callback) => {
      const allowedOrigins = [
        "https://ecommerce-frontend-lake-nu.vercel.app",
        "*",
      ];
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);
app.use(express.json());

// Routes
app.use("/api/products", productRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("Ecommerce Backend is running!");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
