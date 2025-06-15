const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 3000;

//middleware to parse json request body
app.use(express.json());


//start server 
app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`);
});

//default route 
app.get("/", (req,res) => {
    res.send(`<h1> Homepage </h1>`);
});