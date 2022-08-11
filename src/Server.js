// import express from "express";
// import mongoose from "mongoose";
// import bodyParser from "body-parser";

const port = 3000;
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose
  .connect("mongodb+srv://emoniebaut:Em258bEDFJtCBKn@cluster0.aw4pta3.mongodb.net/magnifyAccessAssessment", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then((res) => {
    console.log(
      'Connected to Distribution API Database - Initial Connection'
    );
  })
  .catch((err) => {
    console.log(
      `Initial Distribution API Database connection error occured -`,
      err
    );
  });

const formSubmission = {
  firstName: String,
  lastName: String,
  iD: Number,
  departmentName: String,
  email: String,
  accommodations: String,
  employment: String,
  file: String,
};

const Submission = mongoose.model("Submission", formSubmission);

app.get("/", (req, res) => {
  res.sendFile("index.html");
});

app.post("/", (req, res) => {
  let newSubmission = new Submission({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    iD: req.body.iD,
    email: req.body.email,
    accommodations: req.body.accommodations,
    employment: req.body.employment,
    file: req.body.file,
    });
    newSubmission.save();
    console.log(newSubmission);
    res.redirect("/");
}
)

app.listen(port);

