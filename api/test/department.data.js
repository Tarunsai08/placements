const mongoose = require("mongoose");
const { Department } = require("../model/department.model");

const departments = [
    { name: "CSE", },
    { name: "ECE" },
    { name: "Civil" },
    { name: "Mechanical" },
    { name: "Electrical" },
];

async function insertDepartments() {
    const departmentCount = await Department.countDocuments();

    if (Number(departmentCount) === 0) {
        await Department.insertMany(departments);

        console.log("Departments inserted successfully!");
    } else {
        console.log("Departments already exist!");
    }
}

module.exports = insertDepartments;