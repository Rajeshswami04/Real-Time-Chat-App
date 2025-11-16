import express from "express";
import path from "path";
import cors from "cors";
import cookieParser from "cookie-parser";
import { connectDB } from "./lib/db.js";
import {ENV} from './lib/env.js';


const __dirname=path.resolve();

const app=express();
const PORT=ENV.PORT||3000;

// payload is too high in some requests like profile update with image
// app.use(express.json({limit:'10mb'}));
app.use(express.json());
app.use(cors());
app.use(cookieParser());
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";

app.use("/api/auth",authRoutes);
app.use("/api/messages",messageRoutes);




if(ENV.NODE_ENV==="production"){
    app.use(express.static(path.join(__dirname,"../frontend/chatify/dist")));
    app.get("/*",(__,res)=>{
        res.sendFile(path.join(__dirname,"../frontend/chatify/dist/index.html"));
    });
}

app.listen(PORT,()=>{
    console.log(`Server is running on port http://localhost:${PORT}`);
    connectDB();
});
