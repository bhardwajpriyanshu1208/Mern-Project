const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  console.log(req.url);
  res.send("HEllo World from router");
});

router.post("/register", (req, res) => {
  console.log(req.body);
  res.json({ message: req.body });
  // res.send("mera register page");
});

module.exports = router;
