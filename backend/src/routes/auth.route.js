import express from "express";
const router = express.Router();
import { login } from "../controllers/auth.controller.js";
import { logout } from "../controllers/auth.controller.js";
import { signup } from "../controllers/auth.controller.js";
import { updateProfile } from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";
import { arcjetMiddleware} from "../middleware/arcjet.middleware.js";

// router.use(arcjetMiddleware);
router.post("/signup",signup);

router.post("/login",login);

router.post("/logout",logout);


router.put("/update-profile",protectRoute,updateProfile);

router.get("/check",protectRoute,(req,res)=>{
    return res.status(200).json(req.user);
});

export default router;


