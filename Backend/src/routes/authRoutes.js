import express from "express";
import { login, register,logout,getMe } from "../controllers/authControllers.js";
import { protect } from "../middleware/authMiddleware.js";


const router = express.Router();

router.post('/register', register)
router.post('/login', login)
router.post('/logout', logout)
router.get('/me', protect, getMe)   // current user


export default router