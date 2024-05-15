// Import the Student model
import Student from '../models/scholarshipDetails.js';

// Controller function for Associate Dean to view student scholarship details
async function viewAssociateDeanStudentScholarshipDetails() {
    try {
        // Find students whose verification_hod is true
        const students = await Student.find({ verification_hod: true });
        
        // Map each student to include scholarship details
        const studentDetails = students.map(student => ({
            name: student.name,
            enrollment: student.enrollment,
            totalDays: student.totalDays,
            entitlement: student.entitlement,
            actualScholarship: student.actualScholarship,
            hra: student.hra,
            netAmount: student.netAmount
        }));
        
        // Return the details
        return studentDetails;
    } catch (error) {
        throw new Error('Error fetching Associate Dean student scholarship details: ' + error.message);
    }
}

// Export the controller function
export { viewAssociateDeanStudentScholarshipDetails };
