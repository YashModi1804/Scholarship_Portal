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
        default:"",
    },
    semester: {
        type: String,
    },
    branch: {
        type: String,
        default:"",
    },
    supervisor: {
        type: String,
        default:"",
    },
    bankAccount: {
        type: String,
        default:"",
    },
    totalDays: {
        type: Number,
        default:"",
    },
    entitlement: {
        type: Number,
        default: 37000,
    },
    actualScholarship: {
        type: Number,
        default:"",
    },
    hra: {
        type: Number,
        default:"",
    },
    netAmount: {
        type: Number,
        default:"",
    },
    verification_supervisor:{
        type:Boolean,
        default:false
    },
    verification_student:{
        type:Boolean,
        default:false
    },
    validation_supervisor:{
        type:Boolean,
        default:false
    },
    verification_hod:{
        type:Boolean,
        default:false
    },
    verification_adean:{
        type:Boolean,
        default:false
    },
    verification_dean:{
        type:Boolean,
        default:false
    },
    verification_registrar:{
        type:Boolean,
        default:false
    },
});


UserSchema.pre('save', function (next) {
    this.hra = 0.18 * this.actualScholarship;
    this.netAmount = this.hra + this.actualScholarship;
    next();
});


const ScholarshipDetail = mongoose.model("ScholarshipDetail", UserSchema);

export default ScholarshipDetail;
