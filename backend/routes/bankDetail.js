import express from "express";
import {bankDetail} from "../controllers/bankDetail.js"
const router = express.Router();

router.post("/bankDetail", bankDetail);

export default router;