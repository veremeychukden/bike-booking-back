const router = require("express").Router();
const BikeController = require("../../controllers/BikeController");
const bikeCreateValidation = require("../../validation/bike");

router.get("/", BikeController.getBikes);
router.post("/", bikeCreateValidation, BikeController.createBike);
router.delete("/:id", bikeCreateValidation, BikeController.deleteBike);
router.patch("/:id", bikeCreateValidation, BikeController.updateBikeStatus); 

module.exports = router;