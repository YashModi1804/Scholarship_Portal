import ScholarshipDetail from "../models/scholarshipDetails.js"
import StudentDetails from '../models/student.js'
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
        const { enrollment, totalDays, entitlement, actualScholarship, hra, netAmount } = req.body;
        const scholar = await ScholarshipDetail.findOne({ enrollment });

        if (!scholar) {
            const postDetail = new ScholarshipDetail({ ...req.body });
            await postDetail.save();
        } else {
            scholar.totalDays = totalDays;
            scholar.entitlement = entitlement;
            scholar.actualScholarship = actualScholarship;
            scholar.hra = hra;
            scholar.netAmount = netAmount;
            await scholar.save();
        }

        res.status(200).json({message: "Scholarship details updated successfully"});
    } catch (error) {
        res.status(500).json({message : "internal server error"});
    }
}
//the below function is for the student interface

export const getScholarshipDetails= async(req, res) =>{
    const enrollment = req.params.enrollment;

    try {
        // Find the scholarship details for the specified student enrollment
        const scholarshipDetails = await ScholarshipDetail.findOne({ enrollment });

        if (!scholarshipDetails) {
            return res.status(404).json({ message: 'Scholarship details not found for the specified student' });
        }

        // If scholarship details found, send them in the response
        res.json(scholarshipDetails);
    } catch (error) {
        // If an error occurs, send 500 response with error message
        console.error('Error fetching scholarship details:', error);
        res.status(500).json({ message: 'Internal server error: ' + error.message });
    }
}