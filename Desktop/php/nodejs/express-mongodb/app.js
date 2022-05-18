const express = require("express");
const mongoose = require("mongoose");

const app = express();
const URL = "mongodb://localhost:27017/schoolDB";
// connecting to database
mongoose.connect(URL, ()=>{
console.log("connected")
});
// creating Schema instance
const schema = mongoose.Schema;
const studentSchema = new schema({
// creating our custom schema
name: {type:String, default: "no value"},
address: String,
admissionDate : Date
});

// creating model on the base of schema
const studentModel = mongoose.model("studentModel", studentSchema);
const data = new studentModel({
    name: "Ali", 
    address: "HeadRajkan", 
    admissionDate : Date.now()
});
data.save();

// Finding only one data by Id
studentModel.findById({ _id: "6284810d578f1e3d34571073"}, (err, docs) => {
 
    console.log(docs['address']);
    
});

// Finding data after filtering
studentModel.find({name:"Ali"},(err, docs)=>{
    docs.forEach((doc)=>{
    // getting only name from all documents
    console.log(doc['name']);
   });
});

// delete many records
studentModel.deleteMany({name:"Ali"}, (err, doc)=>{
    console.log(doc);
});

// delete a record
studentModel.findOneAndDelete({name:"Ali"}, (err, doc)=>{
    console.log(doc);
});

// updating a record
studentModel.findOneAndUpdate({name: "Ali"}, {name:"Ahmad"}, (err, res)=>{
    console.log(res);
});

app.listen(4000, ()=>{
     console.log("listening");
});