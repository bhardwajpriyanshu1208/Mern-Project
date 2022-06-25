const mongoose = require("mongoose");
const express = require("express");

const app = express();

require("./db/conn");

// const User = require("./model/userSchema");
app.use(express.json());

app.use(require("./router/auth"));

const middlware = (req, res, next) => {
  console.log("Hello from middleware");
  next();
};

app.get("/", (req, res) => {
  console.log(req.url);
  res.send("HEllo World");
});

app.get("/about", (req, res) => {
  console.log(req.url);
  res.send("HEllo from About");
});

app.get("/services", (req, res) => {
  console.log(req.url);
  res.send("HEllo from services");
});

app.get("/login", (req, res) => {
  console.log(req.url);
  res.send("HEllo from login");
});

app.get("/signup", (req, res) => {
  console.log(req.url);
  res.send("HEllo from signup");
});

app.get("/forgotpaword", (req, res) => {
  console.log(req.url);
  res.send("HEllo from forgot pasword");
});

app.get("/listyourproperty", middlware, (req, res) => {
  console.log(req.url);
  res.send("HEllo fromlist your property");
});

app.get("/Rent", middlware, (req, res) => {
  console.log(req.url);
  res.send("HEllo From rent");
});

app.listen(8000, () => {
  console.log("server is running at port 3000");
});
