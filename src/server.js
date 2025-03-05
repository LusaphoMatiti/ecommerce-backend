console.log("Initializing server...");
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/products", productRoutes);

// Test route
app.get("/", (req, res) => {
  console.log("Handling root route (/)");
  res.status(200).send("Ecommerce Backend is running!");
});

// Start the server only in development mode
if (process.env.NODE_ENV !== "production") {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

export default app; // Export the app for Vercel
