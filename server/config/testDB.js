// config/testDB.js
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectTestDB = async () => {
  try {
    const uri =
      process.env.MONGO_URI_TEST || "mongodb://127.0.0.1:27017/testDB";

    await mongoose.connect(uri); // no options needed in Mongoose 7+
    console.log("Connected to test DB");
  } catch (err) {
    console.error("Failed to connect to test DB", err);
    process.exit(1);
  }
};

export default connectTestDB;
