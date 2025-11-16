import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
const router = express.Router();
import { getAllContacts } from "../controllers/message.controller.js";
import { getMessagesByUserId } from "../controllers/message.controller.js";
import {sendMessage } from "../controllers/message.controller.js";


router.get("/contacts",protectRoute,getAllContacts);
// router.get("/chats",getChatPartners);
router.get("/:id",protectRoute,getMessagesByUserId);
router.post("/send/:id",protectRoute,sendMessage);







export default router;
