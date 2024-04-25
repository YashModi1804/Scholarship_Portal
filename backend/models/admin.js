import mongoose from "mongoose";

const AdminSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    department: {
        type: String,
    },
    position: {
        type: String,
        require: true,
    }
}, {timestamps: true});

const Admin = mongoose.model("Admin", AdminSchema);