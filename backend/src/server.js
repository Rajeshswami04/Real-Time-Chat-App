import express from "express";
import path from "path";
import cors from "cors";
import cookieParser from "cookie-parser";
import { connectDB } from "./lib/db.js";
import {ENV} from './lib/env.js';
import {app,server} from "./lib/socket.js";

const __dirname=path.resolve();

const PORT=ENV.PORT||3000;


app.use(express.json({limit:'10mb'}));
app.use(cors({ origin: ENV.CLIENT_URL, credentials: true }));
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

server.listen(PORT,()=>{
    console.log(`Server is running on port http://localhost:${PORT}`);
    connectDB();
});
