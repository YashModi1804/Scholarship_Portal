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
        default: "",
    },
    branch: {
        type: String,
        default:"",
    },
    supervisor: {
        type: String,
        default:"",
    },
    bankName: {
        type: String,
        default:"",
    },
    accountNo:{
        type:String,
        default:"",
    },
    ifsc:{
        type:String,
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
        default:0,
    },
    hra: {
        type: Number,
        default:0,
    },
    netAmount: {
        type: Number,
        default:0,
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

UserSchema.pre('save', function(next) {
    const programme = "PHD";
    this.programme = programme;
    next();
});

const ScholarshipDetail = mongoose.model("ScholarshipDetail", UserSchema);

export default ScholarshipDetail;
