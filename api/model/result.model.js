const mongoose = require('mongoose');

const resultSchema = new mongoose.Schema({
    student_id: mongoose.ObjectId,
    rollNo: String,
    company: String,
    package:Number
})

const Result = mongoose.model("Result", resultSchema);

module.exports = Result;