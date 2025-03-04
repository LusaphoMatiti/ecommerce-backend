// routes/productRoutes.js
import { Router } from "express";
import {
  getProducts,
  getProductsByCategory,
} from "../controllers/productController.js";

const router = Router();

// Get all products
router.get("/", getProducts);

// Get products by category
router.get("/:category", getProductsByCategory);

export default router;
