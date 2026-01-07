const { Schema, model } = require("mongoose");

const userSchema = new Schema({
    fullName:{
        type:String,
        required:true,
        maxlength:25
    },
    phoneNumber:{
        type:String,
        required:true,
        unique:true,
        maxlength:10
    },
    email:{
        type:String,
        required:true,
        unique:true,
        maxlength:50
    },
    password:{
        type:String,
        required:true,
        minlength:5
    },
},
{
    timestamps:true
});

const User  = model("User", userSchema);

module.exports = User;