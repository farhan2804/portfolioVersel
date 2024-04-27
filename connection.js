require("dotenv").config();
const mongoose = require("mongoose");
const mongo = process.env.MONGO;
const connectToDatabase = async () => {
  try {
    await mongoose.connect(mongo);
    console.log("Connection successful!");
  } catch (error) {
    console.error("Connection error:", error);
  }
};

connectToDatabase();
