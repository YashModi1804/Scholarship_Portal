// Import necessary modules
import express from 'express';
import { viewStudentScholarshipDetails } from './controllers/supervisorController.js';

// Initialize Express router
const router = express.Router();

// Route to handle the request from the supervisor to view student scholarship details
router.get('/students', async (req, res) => {
    const { supervisorName, department } = req.query; // Assuming supervisorName and department are provided in the query parameters
    
    try {
        // Call the controller function to fetch student scholarship details
        const studentDetails = await viewStudentScholarshipDetails(supervisorName, department);
        
        // If no student details found, send 404 response
        if (!studentDetails || studentDetails.length === 0) {
            return res.status(404).json({ message: 'No student details found' });
        }
        
        // If student details found, send them in the response
        res.json(studentDetails);
    } catch (error) {
        // If an error occurs, send 500 response with error message
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Export the router
export default router;
