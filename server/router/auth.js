const express = require("express");

require("../db/conn");

const User = require("../model/userSchema");
const router = express.Router();

router.get("/", (req, res) => {
  console.log(req.url);
  res.send("HEllo World from router");
});

router.post("/register", async (req, res) => {
  const { name, email, mobile, choice, password } = req.body;

  if (!name || !email || !mobile || !choice || !password) {
    return res.status(422).json({ error: "Plz fill the field property" });
  }

  try {
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      return res.status(422).json({ error: "Email already exist" });
    }

    const user = new User({ name, email, mobile, choice, password });

    await user.save();

    res.status(201).json({ message: "user registerd successfully" });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
