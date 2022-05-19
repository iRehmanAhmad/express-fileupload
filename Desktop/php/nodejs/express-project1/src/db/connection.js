const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/dynamic").then(()=>{
    console.log('Connection successful');
}).catch((error)=>{
    console.log('There is an error', error);
})