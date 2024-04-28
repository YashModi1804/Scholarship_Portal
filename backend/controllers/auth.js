import mongoose from "mongoose";
import User from "../models/user.js";
import bcrypt from "bcryptjs";
import { createError } from "../error.js";

export const signup = async (req, res, next) => {
    try {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);
        const existingUser = await User.findOne({ username: req.body.username });
        
        if (existingUser) {
            return res.status(400).json({ error: "Username already exists" });
        }

        const newUser = new User({ ...req.body, password: hash });
        await newUser.save();
        res.status(200).json({ message: "User has been created" });
    } catch (error) {
        console.error("Signup error:", error);
        next(createError(500, "Internal Server Error"));
    }
}

export const signin = async (req, res, next) => {
    try {
        const user = await User.findOne({username: req.body.username});
        if(!user) 
          return next(createError(404, "User not found"))
        
        const isCorrect = await bcrypt.compare(req.body.password, user.password);
        if(!isCorrect)
          return next(createError(400, "Wrong credentials"));
        
        res.status(200).json({
            msg: "Login Successfully",
            token: await user.generateToken(),
            userId: user._id.toString(),
        });
    } catch (error) {
        console.log("error: ", error);
    }
}
