const mongoose = require('mongoose');
const Student = require('../model/student.model');

const students = [
    {
        name: "Sanjay",
        email: "bendalamsanjay.21.cse@anits.edu.in",
        rollNo: "1",
        dob: "1995-01-01",
        passOutYear: "2023",
        department_id: new mongoose.Types.ObjectId("651fde3ee6db3d48a35fb293"),
    },
    {
        name: "Tarun",
        email: "dhulitarunvarahasai.21.cse@anits.edu.in",
        rollNo: "2",
        dob: "1996-02-02",
        passOutYear: "2024",
        department_id: new mongoose.Types.ObjectId("651fde3ee6db3d48a35fb294"),
    },
    {
        name: "Ram",
        email: "kotaramkumar.21.cse@anits.edu.in",
        rollNo: "3",
        dob: "1997-03-03",
        passOutYear: "2025",
        department_id: new mongoose.Types.ObjectId("651fde3ee6db3d48a35fb295"),
    },
    {
        name: "Asreeth",
        email: "puthetiasreeth.21.cse@anits.edu.in",
        rollNo: "4",
        dob: "1998-04-04",
        passOutYear: "2026",
        department_id: new mongoose.Types.ObjectId("651fde3ee6db3d48a35fb296"),
    },
    {
        name: "Hemanth",
        email: "alluhemanth27@gmail.com",
        rollNo: "5",
        dob: "1999-05-05",
        passOutYear: "2027",
        department_id: new mongoose.Types.ObjectId("651fde3ee6db3d48a35fb297"),
    },
];

async function insertStudents() {
    const studentCount = await Student.countDocuments();

    if (Number(studentCount) === 0) {
        await Student.insertMany(students);

        console.log("Students inserted successfully!");
    } else {
        console.log("Students already exist!");
    }
}

module.exports = insertStudents;