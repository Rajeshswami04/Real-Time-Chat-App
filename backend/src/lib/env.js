import dotenv from 'dotenv';
// Load environment variables from .env file
dotenv.config();

export const ENV = {
    PORT: process.env.PORT,
    MONGO_URI: process.env.MONGO_URI,
    NODE_ENV: process.env.NODE_ENV,
    JWT_SECRET: process.env.JWT_SECRET, // to check authentication
    RESEND_API_KEY: process.env.RESEND_API_KEY,
EMAIL_FROM: process.env.EMAIL_FROM,
EMAIL_FROM_NAME: process.env.EMAIL_FROM_NAME,
CLIENT_URL: process.env.CLIENT_URL,
CLOUDINARY_CLOUD_NAME:process.env.CLOUDINARY_CLOUD_NAME,
CLOUDINARY_API_KEY:process.env.CLOUDINARY_API_KEY,
CLOUDINARY_API_SECRET:process.env.CLOUDINARY_API_SECRET,
ARCJET_KEY:process.env.ARCJET_KEY,
ARCJET_ENV:process.env.ARCJET_ENV
}


// PORT=3000
// MONGO_URI=mongodb+srv://dbchat:r1s2t3w4@cluster0.ce6xumh.mongodb.net/chatdb?appName=Cluster0

// NODE_ENV=development

// JWT_SECRET=mysecret

// RESEND_API_KEY=re_WQdtsSeV_4iarvn78XnaCyoH7U3XKhEmW

// EMAIL_FROM="onboarding@dev"
// EMAIL_FROM_NAME="raj"

// CLIENT_URL=http://localhost:5173