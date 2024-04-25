import User from "../models/user.js";
import { createError } from "../error.js";

export const getUser = async (req, res, next) => {
    try {
        const user = await User.find();
        res.json(user);
    } catch (err) {
        next(createError(404, "not found"));
    }
}