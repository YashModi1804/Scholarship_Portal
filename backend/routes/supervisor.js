import express from 'express'
import { getUsersBySupervisor } from '../controllers/supervisor.js'
const router=express.Router();
router.post('/get_phd_scholars',getUsersBySupervisor);
export default router;

