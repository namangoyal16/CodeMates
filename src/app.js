const express = require('express');

const app = express();

app.use("/hello",(req,res)=>{
    res.send("Hi naman");
})

app.listen(7777, ()=>{
    console.log("server is successfully running");
})

