const express=require("express");
const path=require("path");
require('dotenv').config();

const mongoose=require("mongoose");
const  connectDB  = require("./config/dbConnect.js");


connectDB();

const addRoute =require("./Routes/add");
const homeRoute =require("./Routes/home");
const deleteRoute =require("./Routes/delete");



const app=express();

app.set("view engine","ejs");
app.use(express.urlencoded({extended:true}));




app.use("/add",addRoute);
app.use("/",homeRoute);
app.use("/delete",deleteRoute);

mongoose.connection.once("open", () => {
    console.log("MongoDB Connected");
    app.listen(process.env.PORT);
});


