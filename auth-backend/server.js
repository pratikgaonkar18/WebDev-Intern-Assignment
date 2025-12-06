import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();

const app = express();

// ------------ CORS (simple & safe) ------------
app.use(
  cors({
    origin: true,          // reflect the request origin
    credentials: true,     // allow cookies/auth headers if needed
  })
);
// IMPORTANT: Do NOT set any other Access-Control-* headers manually anywhere.

// ------------ MIDDLEWARE ------------
app.use(express.json());

// ------------ HEALTH CHECK ------------
app.get("/", (req, res) => {
  res.send("Auth API is running");
});

// ------------ ROUTES ------------
app.use("/api/auth", authRoutes);

// ------------ DB + SERVER START ------------
const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });
