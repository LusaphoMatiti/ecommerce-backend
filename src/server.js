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
    origin: [
      "*", // For local development
      "https://ecommerce-frontend-3c1yjqjrn-lusaphomatitis-projects.vercel.app", // Deployed frontend URL
    ],
    credentials: true, // Allow cookies if needed
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
