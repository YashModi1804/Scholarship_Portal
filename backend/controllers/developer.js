import mongoose from 'mongoose';
import Student from '../models/student.js';

// Controller function for inserting student data
export  const insertStudentData = async (req, res) => {
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

// Controller function for updating student bank details
export const updateBankDetail = async (req, res) => {
    try {
        const { enrollment, bankName, accountNo, ifscCode, dateOfJoining } = req.body;
        // const studentId = "6630e8f68101c468d40a20f7"; // Fetch studentId from URL parameters.
        const student = await Student.findOne({enrollment});
        
        // Find the student by ID
        // const student = await Student.findById(studentId);

        if (!student) {
            return res.status(404).json({ message: 'Student not found' });
        }

        // Update the bank details
        student.bankName = req.body.bankName;
        student.accountNo = req.body.accountNo;
        student.ifscCode = req.body.ifscCode;
        student.dateOfJoining = req.body.dateOfJoining;

        // Save the updated student
        await student.save();

        res.status(200).json({ message: 'Bank details updated successfully' });
    } catch (error) {
        console.error('Error updating bank details:', error);
        res.status(500).json({ message: 'Internal server error: ' + error.message });
    }
}
