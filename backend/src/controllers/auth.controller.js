import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import { generateToken } from '../lib/utils.js';
import  { sendWelcomeEmail } from '../emails/emailHandler.js';
import dotenv from 'dotenv';
dotenv.config();


export const signup = async (req, res) => {
  const {fullName, email, password} = req.body;
  try{
    if(!fullName||!email||!password){
        return res.status(400).json({message:"All fields are required"});
    }    
    if(password.length<6){
        return res.status(400).json({message:"Password must be at least 6 characters"});
  }
  const emailRegex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if(!emailRegex.test(email)){
    return res.status(400).json({message:"Invalid email format"});
  }
  const user=await User.findOne({email});
if(user){
    return res.status(400).json({message:"Email already in use"});
}
//12345=>$2a$10$EixZaYVK1fsbw1ZfbX3OXePaWxn96p36c6V0qH8y5jY5Z7v4u5h8e
const hashedPassword=await bcrypt.hash(password,10);
const newUser=new User({
    fullName,
    email,
    password:hashedPassword,
    profilePic:""
});
if(newUser){
   const Saveduser= await newUser.save();
   //generate token and set cookie
    generateToken(newUser._id,res);
    try{
        await sendWelcomeEmail(email, fullName, process.env.CLIENT_URL);
    }catch(error){
        console.error("Error sending welcome email:", error);
    }
    return res.status(201).json({
        _id:newUser._id,
        fullName:newUser.fullName,
        email:newUser.email,
        profilePic:newUser.profilePic,
    });

}else{
    return res.status(400).json({message:"Failed to register user"});
}

}catch(error){
    console.error("Error during signup:", error);
    return res.status(500).json({message:"Server error"});
}
}





export const login = (req, res) => {
  res.send("Login endpoint");
};
export const logout = (req, res) => {
    res.send("Logout endpoint");
};

