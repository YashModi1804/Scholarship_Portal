import express from "express";
import { createAdmin } from "../controllers/admin_details.js";

const router = express.Router();

// Route to create a new admin user
router.post("/admin/create", createAdmin);

export default router;
