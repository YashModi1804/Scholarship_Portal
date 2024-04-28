// Import the Student model
import Student from './models/student.js';

// Controller function for supervisor to view student scholarship details
async function viewStudentScholarshipDetails() {
    try {
        // Find all students
        const students = await Student.find();
        
        // Map each student to include scholarship details and verification status
        const studentDetails = students.map(student => ({
            name: student.name,
            enrollment: student.enrollment,
            totalDays: student.totalDays,
            entitlement: student.entitlement,
            actualScholarship: student.actualScholarship,
            hra: student.hra,
            netAmount: student.netAmount,
            studentVerification: student.verification_student ? 'Accepted' : 'Pending'
        }));
        
        // Return the details
        return studentDetails;
    } catch (error) {
        throw new Error('Error fetching student scholarship details: ' + error.message);
    }
}

// Export the controller function
export { viewStudentScholarshipDetails };
