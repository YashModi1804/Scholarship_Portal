import ScholarshipDetail from "../models/scholarshipDetails.js"
import mongoose from "mongoose";
// Controller function for student to view scholarship details
// export const viewScholarshipDetails = async (enrollment) =>  {
//     try {
//         // Find the student with the provided enrollment number
//         const student = await Student.findOne({ enrollment });
        
//         // If no student found with the provided enrollment, return null
//         if (!student) {
//             return null;
//         }
        
//         // If supervisor verification is true for the student, return scholarship details
//         if (student.verification_supervisor) {
//             return {
//                 name: student.name,
//                 enrollment: student.enrollment,
//                 totalDays: student.totalDays,
//                 entitlement: student.entitlement,
//                 actualScholarship: student.actualScholarship,
//                 hra: student.hra,
//                 netAmount: student.netAmount
//             };
//         } else {
//             // If supervisor verification is not true, return null
//             return null;
//         }
//     } catch (error) {
//         throw new Error('Error fetching scholarship details: ' + error.message);
//     }
// }

export const updateScholarshipDetails = async(req, res) => {
    try {
        const {name, enrollment, branch, semester, bankAccount, totalDays, entitlement, actualScholarship, hra, netAmount} = req.body;
        const scholar = await ScholarshipDetail.findOne({enrollment});

        if(!scholar) {
            return res.status(404).json({message: "Student not found"});
        }

        scholar.name = req.body.name;
        scholar.enrollment = req.body.enrollment;
        scholar.branch = req.body.branch;
        scholar.semester = req.body.semester;
        scholar.bankAccount = req.body.bankAccount;
        scholar.totalDays = req.body.totalDays;
        scholar.entitlement = req.body.entitlement;
        scholar.actualScholarship = req.body.actualScholarship;
        scholar.hra = req.body.hra;
        scholar.netAmount = req.body.netAmount;

        await scholar.save();

        res.status(200).json({message: "Scholarship details updated successfully"});
    } catch (error) {
        res.status(500).json({message : "internal server error"});
    }
}
