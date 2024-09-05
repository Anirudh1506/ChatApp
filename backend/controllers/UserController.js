import User from '../models/UserModel.js';

export const getUsers=async(req,res)=>{
    const user=await User.find();
    return res.json(user);
}

export const addUsers=async(req,res)=>{
    console.log(req.body);
    const {name,email}=req.body;
    const user=await User.create({
        Name:name,
        Email:email
    });
    return res.json(user)
}