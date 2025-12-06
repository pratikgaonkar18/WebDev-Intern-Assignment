import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();

const app = express();

// --------- CORS (CLEAN VERSION) ----------
app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173",
    credentials: true,
  })
);
// DO NOT add any manual res.header('Access-Control-Allow-Origin', ...) anywhere

// --------- MIDDLEWARE ----------
app.use(express.json());

// --------- HEALTH CHECK ----------
app.get("/", (req, res) => {
  res.send("Auth API is running");
});

// --------- ROUTES ----------
app.use("/api/auth", authRoutes);

// --------- DB + SERVER START ----------
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
