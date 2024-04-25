import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        unique: true,
    }, 
    enrollment: {
        type: String,
        require: true,
        unique: true,
    },
    programme: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true,
    },
    department: {
        type: String,
        require: true,
    },
    supervisor: {
        type: String,
        require: true,
    }
}, {timestamps: true});

const User = mongoose.model("User", UserSchema);

export default User;

