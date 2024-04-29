// Import necessary modules
import express from 'express';
import { insertStudentData } from '../controllers/developer.js';

// Initialize Express router
const router = express.Router();

// Route to handle the insertion of student data
router.post('/students_data', insertStudentData);

// Export the router
export default router;
