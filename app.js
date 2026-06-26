const express = require("express");
const { connectDB } = require('./config/db'); 

const app = express();

connectDB();

app.get('/', (req,res)=>{
    res.send("Hello World");
});

app.listen(9000, ()=> console.log("server running on port 9000"));