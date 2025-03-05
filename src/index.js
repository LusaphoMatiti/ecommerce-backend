import { createServer } from "http";
import app from "../server.js";

// Create an HTTP server for Vercel
export default (req, res) => {
  return new Promise((resolve, reject) => {
    const server = createServer(app);
    server.emit("request", req, res);
    server.close();
  });
};
