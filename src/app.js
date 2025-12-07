const express = require('express');
const connectDB = require("./configs/database");
const User = require("./models/user");

const app = express();
app.use(express.json());   // <---- super important

app.post("/signup" ,async (req,res)=>{

  const userObj = {
     firstName : "Naman",
     lastName : "Goyal",
     emailId : "naman.eclipse@gmail.com",
     password :"Naman@123"
  }

  try{
    const user = new User(userObj);
    await user.save();
    res.send("User saved successfully");
  }catch(err){
    console.log(err);
    res.send("Error saving user");
  }
});

const startServer = async () =>{
  try{
    await connectDB();
    app.listen(7777, ()=> console.log("Server running on 7777"));
  }catch(err){
    console.log("DB connection failed, server not started.");
  }
}

startServer();
