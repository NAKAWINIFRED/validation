const mongoose = require("mongoose");

const registrationschema = new mongoose.Schema({
    email:{
        type:String,
        trim:true
    },
    password:{
        type:Date,
        trim:true,
    },
    
    address:{
        type:String,
        trim:true,
    },
    address2:{
        type:String,
        trim:true,
    },
    city:{
        type:String,
        trim:true,
    },
    state:{
        type:String,
        trim:true,
    },
    zip:{
        type:String,
        trim:true,
    },
})    
module.exports = mongoose.model("Registration" , registrationschema)