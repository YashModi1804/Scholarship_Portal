import express from "express";
import { createAdmin, LoginAdmin} from "../controllers/admin_details.js";

const router = express.Router();

// Route to create a new admin user
router.post("/admin/create", createAdmin);
router.post("/admin/login", LoginAdmin);

export default router;
