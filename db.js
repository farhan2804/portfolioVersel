const mongoose = require("mongoose");
const validator = require("validator");
const portfolioSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new error("invalid email");
      }
    },
  },
  message: {
    type: String,
  },
});
//now creating a new collection
const Portfolioviewers = new mongoose.model(
  "portfolioviewers",
  portfolioSchema
);
module.exports = Portfolioviewers;
