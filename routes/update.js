const express = require("express");
const router = express.Router();
const User = require("../models/user");

router.patch("/:id", async (req, res) => {
  try {
    const userId = req.params.id;
    const { name, age, city } = req.body;

    const updateFields = {};
    if (name) updateFields.name = name;
    if (age) updateFields.age = age;
    if (city) updateFields.city = city;

    const user = await User.findByIdAndUpdate(userId, updateFields, { new: true });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
