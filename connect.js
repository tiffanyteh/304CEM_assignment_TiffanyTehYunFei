const mongoose = require('mongoose');

//username, password and database name
const db = "mongodb+srv://TiffanyTeh:tiffanyteh00@cluster0.yejkq.mongodb.net/NewsDB?retryWrites=true&w=majority";

mongoose.connect(db).then(()=>{
    console.log("Connected to database");
})
.catch(()=>{
    console.log("Error Connecting to database");
})