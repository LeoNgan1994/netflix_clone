const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bp = require("body-parser");

dotenv.config();
const port = 8800;

const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const movieRoute = require("./routes/movies");
const listRoute = require("./routes/lists");

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Mongo DB connection success"))
  .catch((err) => console.log(err));

app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/movies", movieRoute);
app.use("/api/lists", listRoute);

app.listen(port, async () => {
  console.log(`server start on port ${port}!`);
});
