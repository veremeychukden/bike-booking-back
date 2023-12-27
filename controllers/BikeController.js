const BikeModel = require("../models/bike");

class BikeController {
  static async createBike(req, res) {
    try {
      const document = new BikeModel({
        ID: req.body.ID,
        name: req.body.name,
        type: req.body.type,
        color: req.body.color,
        wheelSize: req.body.wheelSize,
        price: req.body.price,
        description: req.body.description
      });

      const bike = await document.save();
      res.status(200).json(bike);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  static async getBikes(req, res) {
    try {
      const bikes = await BikeModel.find();
      res.status(200).json(bikes);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  static async updateBikeStatus(req, res) {
    try {
      const bikeId = req.params.id;
      const newStatus  = req.body.status;

      if (newStatus && !['Available', 'Busy', 'Unavailable'].includes(newStatus)) {
        return res.status(400).json({ error: 'Invalid status value' });
      }

      await BikeModel.findOneAndUpdate(
        {
          ID: bikeId
        },
        {
          $set: {
            status: newStatus
          }
        },
        {
          returnDocument: "after",
        }
      );
      const bikes = await BikeModel.find();
      res.status(200).json(bikes);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  static async deleteBike(req, res) {
    try {
      const bikeId = req.params.id;
      await BikeModel.findOneAndDelete({ ID: bikeId })
      const bikes = await BikeModel.find();
      res.status(200).json(bikes);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }
}

module.exports = BikeController;