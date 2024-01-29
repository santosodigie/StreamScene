const express = require("express");
const app = express();
const mongoose = require("mongoose")
const dotenv = require("dotenv")

dotenv.config();

mongoose.connect(process.env.MONGO_URL).then(()=>console.log("DB Connection Success"));

app.listen(3000, ()=>{
    console.log("Backend Server is running")
})