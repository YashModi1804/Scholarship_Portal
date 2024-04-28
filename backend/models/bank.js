import mongoose from "mongoose";

const BankSchema = new mongoose.Schema ({
    enrollment: {
        type: String,
        require: true,
        unique: true,
    },
    name: {
        type: String,
        require: true,
    }, 
    branch: {
        type: String,
        require: true,
    },
    bankName: {
        type: String,
        required: true,
    },
    accountNo: {
        type: Number,
        required: true,
    },
    ifscCode: {
        type: String,
        required: true,
    },
    dateOfJoining: {
        type: Date,
        required: true,
    },
});

BankSchema.pre('save', function(next) {
    // Extract branch from enrollment ID (assuming it's always 3 characters starting from index 7)
    const branch = this.enrollment.substring(7, 10);
    // Set branch field
    this.branch = branch;
    next();
});

const Bank = mongoose.model("bank", BankSchema);

export default Bank;