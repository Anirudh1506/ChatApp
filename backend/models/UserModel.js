import mongoose from "mongoose";

const user=mongoose.Schema({
    Name:{
        type:String,
        required:['true']
    },
    Email:{
        type:String,
        required:['true']
    },
    Username:{
        type:String,
        required:['true']
    },
    Password:{
        type:String,
        required:['true']
    },
    Role:{
        type:String,
        required:['true']
    },
    Connections:[{
        type:mongoose.Schema.ObjectId,
        ref:"User"
    }]
});

const User=mongoose.model("User",user)
export default User;