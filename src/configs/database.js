const mongoose = require("mongoose");

const connectDB = async()=>{
    await mongoose.connect(
     "mongodb+srv://namaneclipse_db_user:Naman123@cluster0.kbzfspb.mongodb.net/codeMates"
    );
    console.log("Connected to Database");
}

module.exports=connectDB;