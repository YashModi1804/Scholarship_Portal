// Import necessary modules
import express from 'express';
import { insertStudentData, updateBankDetail } from '../controllers/developer.js';
import validate from '../middlewares/validate-middleware.js';
import { studentSchema } from '../validators/auth-validator.js';

// Initialize Express router
const router = express.Router();

// Route to handle the insertion of student data
router.post('/students_data', validate(studentSchema), insertStudentData);
router.put('/bank_data', updateBankDetail);

// Export the router
export default router;
