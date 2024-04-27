import mongoose from "mongoose";
import jwt from "jsonwebtoken";

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    }, 
    username: {
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
    branch: {
        type: String,
        require: true,
    },
    supervisor: {
        type: String,
        require: true,
    }
}, {timestamps: true});

//json web token
UserSchema.methods.generateToken = async function () {
    try {
        return jwt.sign({
            userId: this._id.toString(),
        },
        process.env.JWT_SECRET_KEY,
        {expiresIn: "1d",}
        )
    } catch (error) {
        console.log(error);
    }
}

const User = mongoose.model("User", UserSchema);

export default User;

