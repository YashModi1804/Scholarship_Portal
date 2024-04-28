import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import authRoutes from "./routes/auth.js"
import userRoutes from "./routes/users.js"
import bankRoutes from "./routes/bankDetail.js"
import supervisor from "./routes/supervisor.js";
import User from "./models/user.js";
import cors from "cors"
const app = express();

const corsOptions = {
    origin: "http://localhost:3000",
    methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
    Credential: true,
}
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