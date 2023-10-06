const mongoose = require("mongoose");
const deptSchema = require("./department.model").deptSchema;

const Student = mongoose.model(
    "Student",
    new mongoose.Schema({
        name: String,
        email: String,
        rollNo: String,
        dob: String,
        passOutYear: String,
        department_id: mongoose.ObjectId,
    })
);

module.exports = Student;