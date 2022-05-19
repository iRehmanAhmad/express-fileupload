const mongoose = require("mongoose");
const validator = require("validator");


const userSchema = mongoose.Schema({
name:{
    type: String,
    requred: true
},
email:{
    type: String,
    requred: true,
    // validate(value){
    //     if(!validator.isEmail()){
    //         throw new Error.message;
    //     }
    // }
},
phone:{
    type: Number,
    required: true
}, 
message:{
    type: String,
    requred: true
}, 
date:{
    type: Date,
    default: Date.now()
}
});

const userModel = mongoose.model("User", userSchema);
module.exports = userModel;

