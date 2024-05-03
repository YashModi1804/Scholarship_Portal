// Import necessary modules
import express from 'express';
import { getScholarshipDetails } from '../controllers/scholarshipDetails.js';

// Initialize Express router
const router = express.Router();

// Route to handle fetching scholarship details for a specific student
router.get('/:enrollment', getScholarshipDetails);

// Export the router
export default router;
