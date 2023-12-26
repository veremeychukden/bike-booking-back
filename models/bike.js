const mongoose = require("mongoose");

const BikeModel = new mongoose.Schema({
  ID: {
    type: Number,
    unique: true,
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
  },
  status: {
    type: String,
    enum: ['Available', 'Busy', 'Unavailable'],
    default: 'Available'
  }
});

module.exports = mongoose.model("Bike", BikeModel);