import jwt from  "jsonwebtoken";
import { ENV } from "../lib/env.js";
import User from "../models/User.js";


export const protectRoute=async(req,res,next)=>{
    try{

        const token=req.cookies.jwt;
        if(!token){
            return res.status(401).json({message:"Unauthorized:no token provided"});
        }
        const decoded = jwt.verify(token,ENV.JWT_SECRET);
        if(!decoded) return res.status(401).json({message:"Unauthorized:invalid token"});
        const user=await User.findById(decoded.userId).select("-password");//select all fields except password
        if(!user){
            return res.status(404).json({message:"Unauthorized:user not found"});
        }
        req.user=user;
        next();// call the next middleware or controller like here profile update function
    }catch(error){
        console.error("Error in protectRoute middleware:",error);
        return res.status(500).json({message:"Server error"});
    }
}