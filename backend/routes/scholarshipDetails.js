// Import necessary modules
import express from 'express';
import { updateScholarshipDetails } from '../controllers/scholarshipDetails.js';

// Initialize Express router
const router = express.Router();

router.put('/scholarshipDetail', updateScholarshipDetails);

// Route to handle the request from the student to view scholarship details
// router.get('/scholarship/:enrollment', async (req, res) => {
//     const { enrollment } = req.params;
//     try {
//         // Call the controller function to fetch scholarship details
//         const scholarshipDetails = await viewScholarshipDetails(enrollment);
 
//         // If no scholarship details found for the student, send 404 response
//         if (!scholarshipDetails) {
//             return res.status(404).json({ message: 'Scholarship details not found' });
//         }
        
//         // If scholarship details found, send them in the response
//         res.json(scholarshipDetails);
//     } catch (error) {
//         // If an error occurs, send 500 response with error message
//         res.status(500).json({ message: 'Internal server error' });
//     }
// });

// Export the router
export default router;
