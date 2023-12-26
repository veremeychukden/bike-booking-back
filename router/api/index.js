const router = require("express").Router();

router.use("/bikes", require("./bikeRouter"));

module.exports = router;