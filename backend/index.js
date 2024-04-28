import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import authRoutes from "./routes/auth.js"
import userRoutes from "./routes/users.js"
import supervisor from "./routes/supervisor.js";
import studentDetails from "./routes/studentDetail.js";
import User from "./models/user.js";

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
app.use("api/users", userRoutes);
app.use("/api/supervisor",supervisor);
app.use("/api/studentDetails",studentDetails);

app.use((err, req, res, next)=>{
    const status = err.status || 500;
    const message = err.message || "Something went wrong!";
    return res.status(status).json({
        success:false,
        status,
        message,
    });
});

app.get('/getUsers', (req, res) => {
    User.find()
    .then(users => res.json(users))
    .catch(err => res.json(err))
});

app.listen(8800, ()=> {
    connect();
    console.log("Connected to Server");
})