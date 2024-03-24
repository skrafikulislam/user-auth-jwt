import express from "express";
import send_LoginDetails from "../controllers/LoginController.js";
 
const router = express.Router();


router.post("/login", send_LoginDetails);

export default router;
