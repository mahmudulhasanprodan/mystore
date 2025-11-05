// External imports
const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

// Internal Imports
const {notFoundHandler,errHandler} = require("./Common/errorHandler")
const addProduct = require("./Router/addRouter")


const app = express();
dotenv.config();

// Database Connection
mongoose.connect(process.env.CONNECTION_STRING)
.then(() => console.log("Database Connected Successfully"))
.catch((err) => console.log(err))

// cors 
app.use(cors({
    origin: "http://localhost:5173",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
}))

//  Requiest Parser
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Static files
app.use(express.static(__dirname + "/public/"));

//  Route Handler
app.use("/product", addProduct);


// Not-Found Handler
app.use(notFoundHandler);

//  Error Handler
app.use(errHandler);

app.listen(process.env.PORT, () => {
    console.log(`Listening to port ${process.env.PORT}`)
});