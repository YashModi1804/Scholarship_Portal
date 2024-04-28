import mongoose from "mongoose";
const StudentDetailSchema = new mongoose.Schema({
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
    bankAccount: {
        type: String,
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
    verification_student:{
        type:Boolean,
        required:true,
        default:false
    }
}, {timestamps: true});


StudentDetailSchema.pre('save', function (next) {
    this.hra = 0.18 * this.actualScholarship;
    this.netAmount = this.hra + this.actualScholarship;
    next();
});

const StudentDetail = mongoose.model("StudentDetail", StudentDetailSchema);

export default StudentDetail;
