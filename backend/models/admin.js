import mongoose from "mongoose";

const AdminSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    username: {
        type: String,
        require: true,
        unique: true,
    },
    password: {
        type: String,
        require: true,
    },
    department: {
        type: String,
    },
    position: {
        type: String,
        require: true,
    },
    adminId: {
        type: String,
        require: true,
        unique: true,
    }
}, {timestamps: true});

const Admin = mongoose.model("Admin", AdminSchema);

export default Admin