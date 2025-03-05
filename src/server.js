import express from "express";
import cors from "cors";
import productRoutes from "./routes/productRoutes.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/products", productRoutes);

// Test route
app.get("/", (req, res) => {
  res.status(200).send("Ecommerce Backend is running!");
});

// Fallback route for unmatched paths
app.all("*", (req, res) => {
  res.status(404).send("Route not found");
});

// Export the app for Vercel
export default app;
