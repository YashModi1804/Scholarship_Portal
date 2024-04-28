import mongoose from "mongoose";
import Bank from "../models/bank.js";
import { createError } from "../error.js";

export const bankDetail = async(req, res, next) => {
    try {
        const newDetail = new Bank(req.body);
        await newDetail.save();
        res.status(200).send("Bank Details Updated");
    } catch (err) {
        console.log(err);
        next(createError(404, "something error"));
    }
}

