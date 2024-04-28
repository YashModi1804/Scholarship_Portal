import express from "express";
import { signin, signup } from "../controllers/auth.js";
import {signupSchema, loginSchema} from "../validators/auth-validator.js"
import validate from "../middlewares/validate-middleware.js";

const router = express.Router();

router.post("/signup", validate(signupSchema), signup);
router.post("/signin", validate(loginSchema), signin);

export default router;