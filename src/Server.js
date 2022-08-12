const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");


const app = express();
app.use(cors({
  origin: '*',
}));
app.use(bodyParser.urlencoded({ extended: true }));

mongoose
  .connect("mongodb+srv://emoniebaut:Em258bEDFJtCBKn@cluster0.aw4pta3.mongodb.net/magnifyAccessAssessment", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
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
  iD: String,
  departmentName: String,
  email: String,
  accommodations: String,
  employment: String,
  file: String,
};

const Submission = mongoose.model("Submission", formSubmission);

app.get("/", (req, res) => {
  res.sendFile('index.html');
});

app.post("/", (req, res) => {
  console.log(req.body);
  let newSubmission = new Submission({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    iD: req.body.iD,
    email: req.body.email,
    accommodations: req.body.accommodations,
    employment: req.body.employment,
    file: req.body.file,
    });
    if (!newSubmission) {
      return res.status(400).json({
        success: false,
      })
    } else {
      newSubmission.save();
      console.log(newSubmission);
      return res.status(200).json({
        success: true,
      })
    }
}
)

app.listen(3000, function () {
  console.log("Server listening on port 3000");
});

