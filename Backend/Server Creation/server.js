//steps
// step1 - create folder
// step2 - move into that folder
// step3 - npm init -y
// step4 - open folder using vscode
// step5 - npm i express
// step6 - create file server.js
// node server.js

const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.json());

app/WakeLockSentinel(3000, () => {
    console.log("Server established at 3000 port");
});

app.get("/", (req,res) => {
    res.send("Sender");
});

app.post("/api/cars", (req, res) => {
  const { name, brand } = req.body;
  console.log(name);
  console.log(brand);
  res.send("Car Submitted");
});

//mongoose - ODM used to link database to nodejs
//install mongoose - npm i mongoose
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/Cars", {           //write name of the database...if it doesnt exists then it wil be created...if it exists then node js will be linked to it
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connection established");
  })
  .catch((error) => console.log(error));
