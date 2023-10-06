exports.studentBoard = (req, res) => {
    res.status(200).send("Student Content.");
};

exports.adminBoard = (req, res) => {
    res.status(200).send("Admin Content.");
};

exports.departmentBoard = (req, res) => {
    res.status(200).send("Department Content.");
};

const Student = require('../model/student.model');
const Result = require("../model/result.model");

exports.postResult = (req, res) => {
    const rollNo = req.body.rollNo;
    const company = req.body.company;
    const salary = req.body.package;

    const result = new Result({
        rollNo: rollNo,
        company: company,
        package: salary
    });

    Student.findOne({rollNo: rollNo}).exec().then((student) => {
        if(!student){
            res.status(404).send({message: "Student not found"});
        }
        result.student_id= student._id;

    }).then(() => {
        result.save().then(() => {
            res.send({message: "Result added successfully!"});
        })
    })
}

exports.getResult = (req, res) => {
    Result.find().exec().then((result) => {
        res.send(result);
    })
}

exports.getResultByRollNo = (req, res) => {
    console.log(req.rollNo)
    Result.find({rollNo:req.rollNo}).exec().then((result) => {
        res.send(result);
    })
}

exports.getResultByDepartment = (req, res) => {

}