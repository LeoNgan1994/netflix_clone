const router = require("express").Router();
const MovieModel = require("../models/Movie");
const verifyToken = require("../verifyToken");

// Create
router.post("/", verifyToken, async (req, res) => {
  if (req.user.isAdmin) {
    const movie = new MovieModel(req.body);

    try {
      const savedMovie = await movie.save();

      res.status(200).json(savedMovie);
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(403).json("Only Admin can create Movie");
  }
});

// Get all
router.get("/", async (req, res) => {
  try {
    const movies = await MovieModel.find();
    res.status(200).json(movies.reverse());
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/find/:id", verifyToken, async (req, res) => {
  try {
    const movie = await MovieModel.findById(req.params.id);
    res.status(200).json(movie);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get random
router.get("/random", verifyToken, async (req, res) => {
  const MovieType = req.query.type;
  let movie;
  try {
    if (MovieType == "series") {
      movie = await MovieModel.aggregate([
        { $match: { isSeries: true } },
        { $sample: { size: 1 } },
      ]);
    } else {
      movie = await MovieModel.aggregate([
        { $match: { isSeries: false } },
        { $sample: { size: 1 } },
      ]);
    }
    res.status(200).json(movie);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Update
router.put("/:id", verifyToken, async (req, res) => {
  if (req.user.isAdmin) {
    try {
      const movie = await MovieModel.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );

      res.status(200).json(movie);
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(403).json("Only Admin can create Movie");
  }
});

// Delete
router.delete("/:id", verifyToken, async (req, res) => {
  if (req.user.isAdmin) {
    try {
      const movie = await MovieModel.findByIdAndDelete(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );

      res.status(200).json(movie);
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(403).json("Only Admin can create Movie");
  }
});

module.exports = router;
