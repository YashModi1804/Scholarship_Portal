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

export  const updateBankDetail = async (req, res) => {
    try {
        const { bankName, accountNo, ifscCode, dateOfJoining } = req.body;
        
        const updateBank = new Student({
            bankName,
            accountNo,
            ifscCode,
            dateOfJoining
        });
        await updateBank.save();
        res.status(201).json({ message: 'Bank Details Updated successfully' });
    } catch (error) {
        console.error('Error inserting Bank data:', error);
        res.status(500).json({ message: 'Internal server error: ' + error.message });
    }
}
