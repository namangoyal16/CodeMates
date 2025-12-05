const express = require('express');

const app = express();

// app.use("/",(req,res)=>{
//     res.send("Hi");
// })

app.get("/user", (req , res)=>{
  res.send("byeeee");
});

app.post("/user", (req,res)=>{
   res.send("Data saved successfully");
});


app.listen(7777, ()=>{
    console.log("server is successfully running");
})

