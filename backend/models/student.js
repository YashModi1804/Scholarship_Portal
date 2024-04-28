import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    }, 
    enrollment: {
        type: String,
        required: true,
        unique: true,
    },
    programme: {
        type: String,
        required: true,
    },
    branch: {
        type: String,
        required: true,
    },
    supervisor: {
        type: String,
        required: true,
    },
<<<<<<< HEAD
    registrationNumber: {
        type: String,
        required: true,
    },
    bankName: {
=======
    bankAccount: {
>>>>>>> b6910a8910740d2a6c99558c3e8acdb18ad0d8f1
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
    totalDays: {
        type: Number,
        required: true,
    },
    entitlement: {
        type: Number,
        default: 37000,
    },
    actualScholarship: {
        type: Number,
        required: true,
    },
    hra: {
        type: Number,
        required: true,
    },
    netAmount: {
        type: Number,
        required: true,
    },
    verification_supervisor:{
        type:Boolean,
        required:true,
        default:false
    },
    verification_student:{
        type:Boolean,
        required:true,
        default:false
    },
    studentVerification: {  // Adding the studentVerification field
        type: String,
        default: 'Pending'   // Default value can be 'Pending', 'Accepted', or 'Rejected'
    },
    validation_supervisor:{
        type:Boolean,
        required:true,
        default:false
    },
    verification_hod:{
        type:Boolean,
        required:true,
        default:false
    },
    verification_adean:{
        type:Boolean,
        required:true,
        default:false
    },
    verification_dean:{
        type:Boolean,
        required:true,
        default:false
    },
    verification_registrar:{
        type:Boolean,
        required:true,
        default:false
    }
    
}, {timestamps: true});

UserSchema.pre('save', function (next) {
    this.hra = 0.18 * this.actualScholarship;
    this.netAmount = this.hra + this.actualScholarship;
    next();
});

const User_long = mongoose.model("User_long", UserSchema);

export default User_long;
