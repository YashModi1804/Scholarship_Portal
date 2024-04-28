import mongoose from "mongoose";
import Student from "../models/student.js";
import { createError } from "../error.js";

export const bankDetail = async(req, res, next) => {
    try {
        const newDetail = new Student(req.body);
        await newDetail.save();
        res.status(200).send("Bank Details Updated");
    } catch (err) {
        next(createError(404, "something error"));
    }
}