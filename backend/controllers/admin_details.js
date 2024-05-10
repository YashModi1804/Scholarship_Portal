import Admin from "../models/admin.js";

// Controller function to create a new admin user
export const createAdmin = async (req, res) => {
    try {
        // Extract data from request body
        const { username, password, name, department, position } = req.body;

        // Create a new admin user
        const admin = new Admin({
            username,
            password,
            name,
            department,
            position
        });

        // Save the admin user to the database
        await admin.save();

        res.status(201).json({ message: "Admin user created successfully", admin });
    } catch (error) {
        console.error('Error inserting student data:', error);
        res.status(500).json({ message: 'Internal server error: ' + error.message });
    }
};
