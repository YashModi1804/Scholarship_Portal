import User from '../models/user.js';
import { createError } from '../error.js';

// Controller function to get supervisor details using userId
export const getUserDetails = async (req, res, next) => {
    try {
        // Retrieve userId from request params
        const { userId } = req.params;

        // Find user user by userId
        const user = await User.findById(userId);

        // If user user not found, return error
        if (!user) {
            return next(createError(404, " User not found"));
        }

        // Extract supervisor details
        const { enrollment } = user;

        // Return supervisor details
        res.status(200).json({ enrollment });
    } catch (error) {
        // Handle any unexpected errors
        console.error('Error fetching user details:', error);
        next(createError(500, "Internal Server Error"));
    }
};
