import express from "express";
import { verifyToken } from "../middleware/authMiddleware.js";
import {
  register,
  login,
  logout,
  refreshToken,
} from "../controllers/authController.js";

const router = express.Router();

//Citizen registration
router.post("/register", register);

//Login
router.post("/login", login);

//Logout
router.post("/logout", verifyToken, logout);

//Refresh access token
router.post("/refresh-token", refreshToken);

export default router;
