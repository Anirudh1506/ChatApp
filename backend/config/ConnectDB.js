import mongoose from "mongoose";

export const connect=async()=>{
    const url=process.env.MONGO_URI;
    try{
        const conn=await mongoose.connect(url);
        console.log(`${conn.connection.host}`);
    }catch(e){
        console.log(e);
    }
}