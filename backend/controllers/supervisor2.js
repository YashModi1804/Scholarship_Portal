// Import the Student model
import Student from '../models/student.js';

// Controller function for supervisor to view student scholarship details
async function viewStudentScholarshipDetails(supervisorName, department) {
    try {
        // Find students whose department and supervisor match with the provided supervisorName and department
        const students = await Student.find({ supervisor: supervisorName, branch: department });
        
        // Filter out students whose student verification is not true
        const verifiedStudents = students.filter(student => student.verification_student);
        
        // Map each verified student to include scholarship details and verification status
        const studentDetails = verifiedStudents.map(student => ({
            name: student.name,
            enrollment: student.enrollment,
            totalDays: student.totalDays,
            entitlement: student.entitlement,
            actualScholarship: student.actualScholarship,
            hra: student.hra,
            netAmount: student.netAmount,
            studentVerification: 'Accepted' // Since we are filtering verified students, we can set this status directly
        }));
        
        // Return the details
        return studentDetails;
    } catch (error) {
        throw new Error('Error fetching student scholarship details: ' + error.message);
    }
}

// Export the controller function
export { viewStudentScholarshipDetails };
