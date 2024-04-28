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
}, {timestamps: true});

const Bank = mongoose.model("bank", BankSchema);

export default Bank;