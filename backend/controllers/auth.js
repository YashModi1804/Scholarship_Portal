import mongoose from "mongoose";
import User from "../models/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const signup = async (req, res) => {
    try {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);
        const newUser = new User({...req.body, password: hash});
        console.log("password : ", newUser);
        await newUser.save();
        res.status(200).send("User has been created");
    } catch (error) {
        console.log("error : ",error);
    }
}

export const signin = async (req, res) => {
    try {
        const user = await User.findOne({username: req.body.username});
        if(!user) 
          console.log("user not found");
        
        const isCorrect = await bcrypt.compare(req.body.password, user.password);
        if(!isCorrect)
          console.log("incorrect password");
        
        // const token = jwt.sign({id: user._id}, )
        res.status(200).send("login successfully");
    } catch (error) {
        console.log("error: ", error);
    }
}
