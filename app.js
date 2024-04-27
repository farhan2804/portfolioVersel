const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
require("./connection");
const Portfolioviewers = require("./db");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello from our side");
});

app.post("/register", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const newData = new Portfolioviewers({ name, email, message });
    await newData.save();
    res.status(201).json({ message: "Message sent successfully" });
  } catch (err) {
    console.error(err);
    // Check for specific error types (e.g., Mongoose validation errors)
    if (err.code === 11000) {
      // Mongoose duplicate key error
      res.status(400).json();
    } else {
      res.status(500).json();
    }
  }
});
app.listen(port, () => {
  console.log(`server started at port ${port}`);
});
