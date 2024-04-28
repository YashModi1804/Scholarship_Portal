// Import necessary modules
import express from 'express';
import { viewAssociateDeanStudentScholarshipDetails } from '../controllers/adean';

// Initialize Express router
const router = express.Router();

// Route to handle the request from the Associate Dean to view student scholarship details
router.get('/students', async (req, res) => {
    try {
        // Call the controller function to fetch Associate Dean student scholarship details
        const studentDetails = await viewAssociateDeanStudentScholarshipDetails();
        
        // If no student details found, send 404 response
        if (!studentDetails || studentDetails.length === 0) {
            return res.status(404).json({ message: 'No student details found' });
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
