const router = require("express").Router();
const UserModel = require("../models/User");
const CryptoJS = require("crypto-js");

function aesEncrypt(msg, key) {
  return CryptoJS.AES.encrypt(msg, key).toString();
}

function aesDecrypt(ciphered, key) {
  const bytes = CryptoJS.AES.decrypt(ciphered, key);
  const originalText = bytes.toString(CryptoJS.enc.Utf8);
  return originalText;
}

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

module.exports = router;
