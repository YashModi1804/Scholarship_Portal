import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    enrollment: {
        type: String,
        required: true,
        unique: true,
    },
    name: {
        type: String,
        required: true,
    }, 
    programme: {
        type: String,
    },
    branch: {
        type: String,
        required: true,
    },
    supervisor: {
        type: String,
        required: true,
    },
    registrationNumber: {
        type: String,
    },
    bankName: {
        type: String,
        default: ""
    },
    accountNo: {
        type: Number,
        default: 0
    },
    ifscCode: {
        type: String,
        default: ""
    },
    dateOfJoining: {
        type: Date,
        default: Date.now
    },
});

UserSchema.pre('save', function(next) {
    const programme = "PHD";
    this.programme = programme;
    next();
});

const User_long = mongoose.model("User_long", UserSchema);

export default User_long;
