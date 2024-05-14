import express from 'express'
import ScholarshipDetail from '../models/scholarshipDetails.js';
const router = express.Router();
// PUT endpoint to update student verification status
router.put('/verify/:_id', async (req, res) => {
    const { id } = req.params;

    try {
        // Find the scholarship detail by ID
        const detail = await ScholarshipDetail.findById(id);
        if (!detail) {
            return res.status(404).json({ message: 'Scholarship detail not found' });
        }

        // Update the verification_student field to true
        detail.verification_supervisor = true;

        // Save the updated detail
        await detail.save();

        // Respond with success message
        res.json({ message: 'Supervisor verification status updated successfully' });
    } catch (error) {
        console.error('Error updating supervisor verification status:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

export default router;