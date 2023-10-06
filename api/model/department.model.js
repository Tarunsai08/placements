const mongoose = require("mongoose");

const deptSchema = new mongoose.Schema({
    name: String,
    email: String,
})

const Department = mongoose.model("Department", deptSchema);

module.exports = {
    deptSchema,
    Department
}