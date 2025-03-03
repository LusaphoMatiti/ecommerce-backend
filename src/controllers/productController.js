// productController.js
import db from "../config/dbConfig.js";
import { uploadToS3 } from "../utils/uploadToS3.js";

// Get all products
export const getProducts = (req, res) => {
  db.query("SELECT * FROM products", (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
};

// Get products by category
export const getProductsByCategory = (req, res) => {
  const category = req.params.category;

  if (!["plants", "seeds", "tools", "resources"].includes(category)) {
    return res.status(400).json({ error: "Invalid category" });
  }

  db.query(
    "SELECT * FROM products WHERE category = ?",
    [category],
    (err, results) => {
      if (err) return res.status(500).send(err);
      res.json(results);
    }
  );
};

// Create a new product
export const createProduct = async (req, res) => {
  try {
    const { prod_name, price, description, category } = req.body;

    if (!req.file) {
      return res.status(400).json({ error: "No image provided." });
    }

    // Upload image to S3
    const imageUrl = await uploadToS3(req.file, `products/${category}`);

    // Insert product into the database
    db.query(
      "INSERT INTO products (prod_name, price, description, image_url, category) VALUES (?, ?, ?, ?, ?)",
      [prod_name, price, description, imageUrl, category],
      (err, results) => {
        if (err) return res.status(500).send(err);
        res.json({
          message: "Product created successfully!",
          id: results.insertId,
        });
      }
    );
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to create product." });
  }
};
