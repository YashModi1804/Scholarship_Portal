// Import necessary modules
import express from 'express';
import { viewHodStudentScholarshipDetails } from '../controllers/hod.js';

// Initialize Express router
const router = express.Router();

// Route to handle the request from the HOD to view student scholarship details
router.get('/students', async (req, res) => {
    const { adminName } = req.query; // Assuming adminName is provided in the query parameters
    
    try {
        // Call the controller function to fetch HOD student scholarship details
        const studentDetails = await viewHodStudentScholarshipDetails(adminName);
        
        // If no student details found, send 404 response
        if (!studentDetails || studentDetails.length === 0) {
            return res.status(404).json({ message: 'No student details found for the provided HOD' });
        }
        
        // If student details found, send them in the response
        res.json(studentDetails);
    } catch (error) {
        // If an error occurs, send 500 response with error message
        res.status(500).json({ message: 'Internal server error: ' + error.message });
    }
});

// Export the router
export default router;
