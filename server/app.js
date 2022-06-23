const mongoose = require("mongoose");
const express = require("express");

const app = express();

const password = encodeURIComponent("Priyanshu@123");

const DB = `mongodb+srv://realestate:${password}@cluster0.9vtac.mongodb.net/realestate?retryWrites=true&w=majority`;

mongoose
  .connect(DB, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("connection succesful");
  })
  .catch((err) => {
    console.log(err);
  });

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
