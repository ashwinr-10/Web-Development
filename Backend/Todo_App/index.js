const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 3000;

//middleware to parse json request body
app.use(express.json());

//import routes for TODO API
const todoRoutes = require("./routes/todos");

//mount the todo API routes
app.use("/api/v1", todoRoutes);

//start server 
app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`);
});

//connect to the database
const dbConnect = require("./config/database");
dbConnect();

//default route 
app.get("/", (req,res) => {
    res.send(`<h1> Homepage </h1>`);
});