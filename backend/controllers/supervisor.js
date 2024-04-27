import User from "../models/user.js";
import { createError } from "../error.js";

export const getUsersBySupervisor = async (req, res, next) => {
    try {
        const { supervisorName, department } = req.body;

        const users = await User.find({
            supervisor: supervisorName,
            branch: department
        }, { name: 1, enrollment: 1 }); 
        res.json(users);
    } catch (err) {
        next(createError(500, "Internal Server Error"));

    }
};
