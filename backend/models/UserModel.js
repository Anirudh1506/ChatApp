import mongoose from "mongoose";
import User from "./UserModel.js";

const user=mongoose.Schema({
    Name:{
        type:String,
        required:['true']
    },
    Email:{
        type:String,
        required:['true']
    }
});

export default mongoose.model("User",user);