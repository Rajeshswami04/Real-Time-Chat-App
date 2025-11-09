import express from "express";
import dotenv from "dotenv";
import path from "path";
import cors from "cors";

const __dirname=path.resolve();


dotenv.config();
const app=express();
const PORT=process.env.PORT||3000;

import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";

app.use("/api/auth",authRoutes);
app.use("/api/messages",messageRoutes);




if(process.env.NODE_ENV==="production"){
    app.use(express.static(path.join(__dirname,"../frontend/chatify/dist")));
    app.get("/*",(__,res)=>{
        res.sendFile(path.join(__dirname,"../frontend/chatify/dist/index.html"));
    });
}

app.listen(PORT,()=>{
    console.log(`Server is running on port http://localhost:${PORT}`);
});
