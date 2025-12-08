import express from "express";
import { login, logout, checkAuth, createInitialOwner } from "../controllers/auth.Controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/login", login);
router.post("/logout", logout);

router.get("/check", protectRoute, checkAuth);

router.post("/seed-owner", createInitialOwner);

export default router;