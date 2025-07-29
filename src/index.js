import dotenv from "dotenv";
import mongoose from "mongoose";
import connectDB from "./db/index.js";
import express from "express";

dotenv.config();

const PORT = process.env.PORT;
const DB_URL = process.env.DB_URL;

console.log("Server will run on:", PORT);
console.log("Database URL is:", DB_URL);

const app = express();
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`server runnnin on ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(`mongoDB connnection faillled HEHHEHHEEHHEH ${err}`);
  });

app.get("/", (req, res) => {
  res.send("<h1>Hello coder</h1>");
});

/*
import express from "express";
const app = express();
(async () => {
  try {
    await mongoose.connect(`${process.env.DB_URL}/${DB_NAME}`);
    app.on("error", (error) => {
      console.log(error);
      throw error;
    });
    app.listen(process.env.PORT, () => {
      console.log("Appp running on" + process.env.PORT);
    });
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
})();
*/
