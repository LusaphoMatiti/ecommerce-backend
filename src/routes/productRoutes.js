// productRoutes.js
import { Router } from "express";
import multer from "multer"; // For handling file uploads
import {
  getProducts,
  getProductsByCategory,
  createProduct,
} from "../controllers/productController.js"; // Import the new createProduct function

const router = Router();

// Use multer to handle file uploads
const upload = multer({ storage: multer.memoryStorage() }); // Store files in memory

// Get all products
router.get("/", getProducts);

// Get products by category
router.get("/:category", getProductsByCategory);

// Create a new product (with image upload)
router.post("/", upload.single("image"), createProduct); // Handle multipart/form-data requests

export default router;
