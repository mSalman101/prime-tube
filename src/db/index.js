import dotenv from "dotenv";
import { configDotenv } from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const PORT = process.env.PORT;
const DB_URL = process.env.DB_URL;

const connectDB = async () => {
  try {
    await mongoose.connect(DB_URL);
    console.log(`connected to Mongoose `);
  } catch (err) {
    console.log(`Errrrrrrrrr agya ${err}`);
  }
};

export default connectDB;

/**
 mongoose
  .connect(DB_URL)
  .then(() => {
    console.log("mongodb is connected...");
  })
  .catch((err) => {
    console.log("MongoDB Conn Error...", err);
  });
 */
