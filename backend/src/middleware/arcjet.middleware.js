import aj from "../lib/arcjet.js";

import {ENV} from "../lib/env.js";
import {isSpoofedBot} from "@arcjet/inspect";
export const arcjetProtection =async(req,res,next)=>{

    try{
        const decision = await aj.protect(req);
        if(decision.isDenied()){
           if(decision.reason.isRateLimit()){
            return res.status(429).json({message:"Too many requests - rate limit exceeded"});
        }else if(decision.reason.isBot()){
            return res.status(403).json({message:"Access denied - bot detected"});
        }else{
            return res.status(403).json({message:"Access denied"});
        }
    }
    if(decision.results.some(isSpoofedBot)){
        return res.status(403).json({message:"Access denied - spoofed bot detected"});
    }
    next();
}
        catch(error){
        console.error("Error in Arcjet middleware:",error);
        // next();
    }
}