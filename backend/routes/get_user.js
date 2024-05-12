import express from 'express';
import { getUserDetails } from '../controllers/get_user.js'

const router = express.Router();

// Route to get supervisor details using userId
router.get('/:userId', getUserDetails);

export default router;
