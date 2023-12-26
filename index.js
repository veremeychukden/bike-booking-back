const express = require("express");
const mongoose = require("mongoose");
const PORT = 8000;

mongoose
  .connect(
    "mongodb+srv://veremeychukden:CNlgsNdzlWwKJenG@bike-booking.wvrw2zg.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected to DB successfuly"))
  .catch((err) => console.log("DB connection error: ", err));

const app = express();
app.use(express.json());

app.use(require("./router/api"));

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));