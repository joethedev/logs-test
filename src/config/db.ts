import mongoose from "mongoose";
import dotenv from "dotenv";
import eventEmitter from "../utils/logger";

dotenv.config();

const connectToDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI!);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("There was an error:", error);
    eventEmitter.emit("log", "TGGGCH", "Database connection failed");
    process.exit(1);
  }
};

export default connectToDB;
