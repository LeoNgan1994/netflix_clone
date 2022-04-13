const router = require("express").Router();
const ListModel = require("../models/List");
const verifyToken = require("../verifyToken");

// Create
router.post("/", verifyToken, async (req, res) => {
  if (req.user.isAdmin) {
    const lists = new ListModel(req.body);

    try {
      const savedList = await lists.save();

      res.status(200).json(savedList);
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(403).json("Only Admin can create List");
  }
});

// Get all
router.get("/", verifyToken, async (req, res) => {
  const typeQuery = req.query.type;
  const genreQuery = req.query.genre;
  let list = [];
  try {
    if (typeQuery) {
      if (genreQuery) {
        list = await ListModel.aggregate([
          { $sample: { size: 10 } },
          { $match: { type: typeQuery, genre: genreQuery } },
        ]);
      }
    } else {
      list = await ListModel.aggregate([{ $sample: { size: 10 } }]);
    }
    res.status(200).json(list);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Delete
router.delete("/:id", verifyToken, async (req, res) => {
  try {
    const deletedList = await ListModel.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedList);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
