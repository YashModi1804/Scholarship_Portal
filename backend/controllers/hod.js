// Import the Student model
import Student from '../models/scholarshipDetails.js';
// Import the Admin model
import Admin from '../models/admin.js';

// Controller function for HOD to view student scholarship details
async function viewHodStudentScholarshipDetails(adminName) {
    try {
        // Find the admin with the provided adminName and position = 'hod'
        const admin = await Admin.findOne({ name: adminName, position: 'hod' });
        
        // If admin not found or admin is not HOD, throw an error
        if (!admin) {
            throw new Error('No HOD found with provided name');
        }
        
        // Find students whose branch matches with the HOD's department
        const students = await Student.find({ branch: admin.department });
        
        // Filter out students whose supervisor validation is true
        const validatedStudents = students.filter(student => student.validation_supervisor);
        
        // Map each validated student to include scholarship details
        const studentDetails = validatedStudents.map(student => ({
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
        throw new Error('Error fetching student scholarship details: ' + error.message);
    }
}

// Export the controller function
export { viewHodStudentScholarshipDetails };
