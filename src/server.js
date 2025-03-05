import express from "express";
import cors from "cors";
import productRoutes from "./routes/productRoutes.js";

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
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
