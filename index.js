const mongoose = require("mongoose");
const mongouri =
  "mongodb://admin:password123@ds045077.mlab.com:45077/experiencias";
const { connect } = require("./database/connect");
const Experiencias = require("./database/schema/model");

const express = require("express");
const app = express();

connect(mongouri);

app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/images"));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("main");
});

app.get("/about", async (req, res) => {
  res.render(about);
});

app.listen(5000, function() {
  console.log("Started!");
});
