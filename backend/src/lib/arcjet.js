import arcjet, { shield, detectBot, slidingWindow } from "@arcjet/node";
// import { isSpoofedBot } from "@arcjet/inspect";
// import express from "express";
import {ENV } from "./env.js";

const aj = arcjet({
  key: ENV.ARCJET_KEY,
  rules: [
   
    shield({ mode: "LIVE" }),
    detectBot({
      mode: "LIVE", 
      allow: [
        "CATEGORY:SEARCH_ENGINE", // Allow known search engine bots
      ],
    }),
    slidingWindow({
      mode: "LIVE",
     max: 100, 
      interval: 60, 
    }),
  ],
});


export default aj;

