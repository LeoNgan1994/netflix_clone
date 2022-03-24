const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bp = require("body-parser");

dotenv.config();

const authRoute = require("./routes/auth");
const port = 8800;

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Mongo DB connection success"))
  .catch((err) => console.log(err));

app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));

app.use("/api/auth", authRoute);

app.listen(port, async () => {
  console.log(`server start on port ${port}!`);
});
