import Student from '../models/student.js';

// Controller function for student to view scholarship details
export const viewScholarshipDetails = async (enrollment) =>  {
    try {
        // Find the student with the provided enrollment number
        const student = await Student.findOne({ enrollment });
        
        // If no student found with the provided enrollment, return null
        if (!student) {
            return null;
        }
        
        // If supervisor verification is true for the student, return scholarship details
        if (student.verification_supervisor) {
            return {
                name: student.name,
                enrollment: student.enrollment,
                totalDays: student.totalDays,
                entitlement: student.entitlement,
                actualScholarship: student.actualScholarship,
                hra: student.hra,
                netAmount: student.netAmount,
            };
        } else {
            // If supervisor verification is not true, return null
            return null;
        }
    } catch (error) {
        throw new Error('Error fetching scholarship details: ' + error.message);
    }
}

// Export the controller function
