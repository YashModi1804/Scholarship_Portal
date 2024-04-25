import mongoose from "mongoose";
import User from "../models/user.js";

export const signup = async (req, res) => {
    try {
        const newUser = new User({...req.body});
        await newUser.save();
        res.status(200).send("User has been created");
    } catch (error) {
        console.log("error : ",error);
    }
}
