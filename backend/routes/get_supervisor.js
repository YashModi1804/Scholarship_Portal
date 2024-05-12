import express from 'express';
import { getSupervisorDetails } from '../controllers/get_supervisor.js'

const router = express.Router();

// Route to get supervisor details using userId
router.get('/:userId', getSupervisorDetails);

export default router;
