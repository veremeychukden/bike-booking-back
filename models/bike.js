const mongoose = require("mongoose");

const BikeModel = new mongoose.Schema({
  ID: {
    type: Number,
    require: true
  },
  name: {
    type: String,
    require: true
  },
  type: {
    type: String,
    require: true
  },
  color: {
    type: String,
    require: true
  },
  wheelSize: {
    type: Number,
    require: true
  },
  price: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  }
});

module.exports = mongoose.Model("Bike", BikeModel);