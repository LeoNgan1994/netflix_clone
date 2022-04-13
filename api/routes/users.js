const router = require("express").Router();
const UserModel = require("../models/User");
const CryptoJS = require("crypto-js");
const { aesEncrypt, aesDecrypt } = require("../util");
const verifyToken = require("../verifyToken");

// Create

// Get by id
router.get("/find/:id", async (req, res) => {
  try {
    const user = await UserModel.findById(req.params.id);
    const { password, ...info } = user._doc;
    res.status(200).json(info);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Get user stats
router.get("/stats", async (req, res) => {
  const today = new Date();
  const latYear = today.setFullYear(today.setFullYear() - 1);

  const monthArr = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  try {
    const data = await UserModel.aggregate([
      {
        $project: {
          month: { $month: "$createdAt" },
        },
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: 1 },
        },
      },
    ]);
    return res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Get all
router.get("/", verifyToken, async (req, res) => {
  const query = req.query.new;
  if (req.user.isAdmin) {
    try {
      const users = query
        ? await UserModel.find().sort({ _id: -1 }).limit(5)
        : await UserModel.find();

      res.status(200).json(users);
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(403).json("you are not allow to search user !");
  }
});

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
