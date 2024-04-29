// Import the Student model
import Student from '../models/student.js';

// Controller function for inserting student data
async function insertStudentData(req, res) {
    try {
        // Extract student data from the request body
        const { name, enrollment, supervisor, branch } = req.body;
        
        // Create a new student object
        const newStudent = new Student({
            name,
            enrollment,
            supervisor,
            branch
        });
        
        // Save the new student to the database
        await newStudent.save();
        
        // Return success response
        res.status(201).json({ message: 'Student data inserted successfully' });
    } catch (error) {
        // Handle errors
        console.error('Error inserting student data:', error);
        res.status(500).json({ message: 'Internal server error: ' + error.message });
    }
}

// Export the controller function
export { insertStudentData };
