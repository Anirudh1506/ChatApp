import User from '../models/UserModel.js';
import bcrypt from 'bcrypt'

export const getUsers=async(req,res)=>{
    const user=await User.find();
    return res.json(user);
}

export const addUsers=async(req,res)=>{
    console.log(req.body);
    const {name,email,password,username}=req.body;

    const salt=await bcrypt.genSalt(10);
    const hpwd=await bcrypt.hash(password,salt);
    const user=await User.create({
        Name:name,
        Email:email,
        Password:hpwd,
        Username:username,
        Role:"Reg"
    });
    return res.json(user)
}

export const loginUser=async(req,res)=>{
    const {username,password}=req.body;
    const user=await User.findOne({Username:username})
    console.log(user)
    console.log(user.Password);
    if(user && await bcrypt.compare(password,user.Password)){
        return res.status(201).send("Success")
    }
    return res.status(400)
}