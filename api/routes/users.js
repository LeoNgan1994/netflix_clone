const router = require("express").Router();
const UserModel = require("../models/User");
const CryptoJS = require("crypto-js");
const { aesEncrypt, aesDecrypt } = require("../util");
const verifyToken = require("../verifyToken");

// Create
// Get by id
// Get all
// Get user stats
// Update

router.put("/:id", verifyToken, async (req, res) => {
  if (req.user.id === req.params.id || req.user.isAdmin) {
    if (req.body.password) {
      req.body.password = aesEncrypt(req.body.password, process.env.SECRET_KEY);
    }

    try {
      const updatedUser = await UserModel.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );

      res.status(200).json(updatedUser);
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(403).json("you can update only on your account !");
  }
});
// Delete

router.delete("/:id", verifyToken, async (req, res) => {
  if (req.user.id === req.params.id || req.user.isAdmin) {
    try {
      await UserModel.findByIdAndDelete(req.params.id);

      res.status(200).json(`Deleted User with id ${req.params.id}`);
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(403).json("you can delete only on your account !");
  }
});

module.exports = router;
