import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import authRoutes from "./routes/auth.js"

const app = express();
dotenv.config();

const connect = async () => {
    await mongoose
    .connect(process.env.MONGO)
    .then(() => {
        console.log("Connected to db");
    })
    .catch((err) => {
        throw err;
    });
};

app.use(express.json());
app.use("/api/auth", authRoutes);

app.listen(8800, ()=> {
    connect();
    console.log("Connected to Server");
})