import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

export const generateToken = (userId, res) => {
    //token

    const {JWT_SECRET} = process.env;
    if (!JWT_SECRET) {
        throw new Error('JWT_SECRET is not defined in environment variables');
    }

    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    });
    
    
    res.cookie("jwt", token, {
        httpOnly: true, //prevent client-side JS access cross site scripting
        maxAge: 30 * 24 * 60 * 60 * 1000, //30 days
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict", //prevent CSRF
    });
    
    
    return token;

};

//http://localhost:3000 // development 0
//https://yourdomain.com /production 1