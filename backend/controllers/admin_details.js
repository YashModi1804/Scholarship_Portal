import Admin from "../models/admin.js";
import mongoose from "mongoose";

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

export const LoginAdmin = async (req, res, next) => {
    try {
        const user = await Admin.findOne({username: req.body.username});
        if(!user) 
          return next(createError(404, "User not found"))
        
        const isCorrect = await Admin.findOne({password: req.body.password});
        if(!isCorrect)
          return next(createError(400, "Wrong credentials"));
        // const isCorrect = await bcrypt.compare(req.body.password, user.password);
        // if(!isCorrect)
        //   return next(createError(400, "Wrong credentials"));
        
        res.status(200).json({
            msg: "Login Successfully",
            // token: await user.generateToken(),
            userId: user._id.toString(),
        });
    } catch (error) {
        console.log("error: ", error);
    }
}
