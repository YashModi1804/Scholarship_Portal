import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import authRoutes from "./routes/auth.js"
import userRoutes from "./routes/users.js"
import bankRoutes from "./routes/bankDetail.js"
import supervisor from "./routes/supervisor.js";
import supervisor2 from "./routes/supervisor2.js";
import studentDetails from "./routes/scholarshipDetails.js";
import hod from "./routes/hod.js";
import adean from "./routes/adean.js";
import developer from "./routes/developer.js";
import student_details_user from './routes/scholarshipDetails2.js'
import student_verification from './routes/student_verification.js'
import supervisor_verification from './routes/supervisor_verification.js'
import hod_verification from './routes/hod_verification.js'
import supervisor_validation from './routes/supervisor_validation.js'
import admin_details from './routes/admin_details.js'
import get_supervisor from './routes/get_supervisor.js'
import get_user from './routes/get_user.js'

import User from "./models/user.js";
import Bank from "./models/bank.js";
import User_long from "./models/student.js";
import ScholarshipDetail from "./models/scholarshipDetails.js";
import cors from "cors"
const app = express();

const corsOptions = {
    origin: "http://localhost:3000",
    methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials: true,
};
app.use(cors(corsOptions));


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
app.use("/api/users", userRoutes);
app.use("/api/bank", bankRoutes);
app.use("/api/supervisor",supervisor);
app.use("/api/hod",hod);
app.use("/api/studentDetails",studentDetails);
app.use("/api/supervisor2",supervisor2);
app.use("/api/adean",adean);
app.use("/api/developer",developer);
app.use("/api/student_details_user",student_details_user);
app.use("/api/update_student_verification",student_verification);
app.use("/api/update_supervisor_verification",supervisor_verification);
app.use("/api/update_hod_verification",hod_verification);
app.use("/api/update_supervisor_validation",supervisor_validation);
app.use("/api/admin_details",admin_details);
app.use("/api/get_supervisor",get_supervisor);
app.use("/api/get_user",get_user);

app.use((err, req, res, next)=>{
    const status = err.status || 500;
    const message = err.message || "Something went wrong!";
    return res.status(status).json({
        success:false,
        status,
        message,
    });
});

//api for fetching data
app.get('/getUsers', (req, res) => {
    User.find()
    .then(users => res.json(users))
    .catch(err => res.json(err))
});

app.get('/getBank', (req, res) => {
    Bank.find()
    .then(banks => res.json(banks))
    .catch(err => res.json(err))
});

app.get('/getStudents', (req, res) => {
    User_long.find()
    .then(user_longs => res.json(user_longs))
    .catch(err => res.json(err))
});

app.get('/getScholarshipDetail', (req, res) => {
    ScholarshipDetail.find()
    .then(scholarshipDetail => res.json(scholarshipDetail))
    .catch(err => res.json(err))
});





app.listen(8800, ()=> {
    connect();
    console.log("Connected to Server");
})