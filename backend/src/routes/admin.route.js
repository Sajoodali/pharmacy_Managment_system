import express from "express";
import { createStaff, getAllStaff, deleteStaff } from "../controllers/admin.Controller.js";
import { protectRoute, restrictTo } from "../middleware/auth.middleware.js";

const router = express.Router();

router.use(protectRoute);
router.use(restrictTo("super_owner", "area_manager")); 


router.post("/create", createStaff);
router.get("/staff", getAllStaff);
router.delete("/delete/:id", deleteStaff);


export default router;