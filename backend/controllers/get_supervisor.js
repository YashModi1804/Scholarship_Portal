import Admin from '../models/admin.js';
import { createError } from '../error.js';


// Controller function to get supervisor details using userId
export const getSupervisorDetails = async (req, res, next) => {
    try {
        // Retrieve userId from request params
        const { userId } = req.params;

        // Find admin user by userId
        const admin = await Admin.findById(userId);

        // If admin user not found, return error
        if (!admin) {
            return next(createError(404, "Admin user not found"));
        }

        // Extract supervisor details
        const { name, department } = admin;

        // Return supervisor details
        res.status(200).json({ name, department });
    } catch (error) {
        // Handle any unexpected errors
        console.error('Error fetching supervisor details:', error);
        next(createError(500, "Internal Server Error"));
    }
};
