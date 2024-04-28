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
});

UserSchema.pre('save', function(next) {
    const programme = "PHD";
    this.programme = programme;
    next();
});

UserSchema.pre('save', function(next) {
    // Extract branch from enrollment ID (assuming it's always 3 characters starting from index 7)
    const branch = this.enrollment.substring(7, 10);
    // Set branch field
    this.branch = branch;
    next();
});

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

