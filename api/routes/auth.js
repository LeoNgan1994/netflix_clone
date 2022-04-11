const router = require("express").Router();
const UserModel = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");
const { aesEncrypt, aesDecrypt } = require("../util");

// Register
router.post("/register", async (req, res) => {
  console.log(`req.body`, req.body);
  const newUser = UserModel({
    username: req.body.username,
    email: req.body.email,
    password: aesEncrypt(req.body.password, process.env.SECRET_KEY),
  });

  try {
    const user = await newUser.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
});

//Login
router.post("/login", async (req, res) => {
  console.log(`req.body`, req.body);

  try {
    const user = await UserModel.findOne({ email: req.body.email });
    !user && res.status(401).json("wrong password or username");
    const originalPassword = aesDecrypt(user.password, process.env.SECRET_KEY);

    originalPassword !== req.body.password &&
      res.status(401).json("wrong password or username");

    const accessToken = jwt.sign(
      { id: user.id, isAdmin: user.isAdmin },
      process.env.SECRET_KEY,
      { expiresIn: "5d" }
    );
    console.log("user", user);
    const { password, ...info } = user._doc;
    res.status(200).json({ ...info, accessToken });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

module.exports = router;
