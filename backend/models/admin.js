import mongoose from "mongoose";

const AdminSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true,
    },
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
    },
});

const Admin = mongoose.model("Admin", AdminSchema);

export default Admin