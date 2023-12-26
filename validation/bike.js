const { body } = require("express-validator");

const bikeCreateValidation = [
  body("ID", "Enter bike ID").isLength({ min: 5 }),
  body("name", "Enter bike name").isLength({ min: 5 }).isString(),
  body("type", "Enter bike type").isLength({ min: 5 }).isString(),
  body("color", "Enter bike color").isLength({ min: 5 }).isString(),
  body("wheelSize", "Enter bike wheelSize").isLength({ min: 5 }),
  body("price", "Enter bike price").isLength({ min: 5 }),
  body("description", "Enter bike description").isLength({ min: 5 }).isString(),
];

module.exports = bikeCreateValidation;