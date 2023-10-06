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
const {Department} = require("../model/department.model");

const nodemailer = require('nodemailer');


let mailTransporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'placements.api.web@gmail.com',
        pass: 'Anits@123'
    }
});

exports.postResult = (req, res) => {
    const rollNo = req.body.rollNo;
    const company = req.body.company;
    const salary = req.body.package;

    const result = new Result({
        rollNo: rollNo,
        company: company,
        package: salary
    });

    let email = "";

    Student.findOne({rollNo: rollNo}).exec().then((student) => {
        if(!student){
            res.status(404).send({message: "Student not found"});
        }
        result.student_id= student._id;
        email = student.email;
    }).then(() => {
        result.save().then(() => {

            if(email==="") res.send()

            let mailDetails = {
                from: '',
                to:email,
                subject: 'Congratulations on your placement!',
                text: 'You have been placed in ' + result.company + ' with a package of ' + result.salary + ' LPA.'
            };

            mailTransporter.sendMail(mailDetails, function(err, data) {
                if(err) {
                    console.log(err)
                    console.log('Error Occurs');
                } else {
                    console.log('Email sent successfully');
                }
            });

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
    console.log(req.deptId)
    Student.find({department_id:req.deptId}).exec().then((students) => {
        let rollNos = [];
        for(let i=0; i<students.length; i++){
            rollNos.push(students[i].rollNo);
        }
        Result.find({rollNo:{$in:rollNos}}).exec().then((result) => {
            res.send(result);
        })
    })
}

exports.getStudentByRollNo = (req,res) => {
    Student.findOne({rollNo:req.rollNo}).exec().then((student) => {
        res.send(student);
    })
}