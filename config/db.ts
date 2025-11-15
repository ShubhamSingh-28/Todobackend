import mongoose from "mongoose";
import dotenv from "dotenv";

export default async function connectDB() {
  dotenv.config();

  const uri = process.env.MONGO_URI;
  if (!uri) throw new Error("MONGO_URI not set in env");

  try {
    await mongoose.connect(uri);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw error;
  }
}
