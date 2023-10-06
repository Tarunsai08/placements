const jwt = require("jsonwebtoken");
const db = require("../model");
const Student = require("../model/student.model");
const {deptSchema,Department} = require("../model/department.model");
const User = db.user;

const config = process.env.JWT_SECRET

const verifyToken = (req, res, next) => {
    let token = req.headers["x-access-token"];

    if (!token) {
        return res.status(403).send({ message: "No token provided!" });
    }

    jwt.verify(token,
        config,
        (err, decoded) => {
            if (err) {
                return res.status(401).send({
                    message: "Unauthorized!",
                });
            }
            req.userId = decoded.id;
            next();
        });
};

const isAdmin = (req, res, next) => {
    User.findById(req.userId).exec().then((user) => {
        if(user.role === "admin") {
            next();
        } else {
            res.status(403).send({ message: "Require Admin Role!" });
        }
    });
};

const isDepartmentCoordinator = (req, res, next) => {
    User.findById(req.userId).exec().then((user) => {
        if(user.role === "department-coordinator") {
            Department.findOne({email:user.email}).exec().then((department) => {
                req.deptId = department._id;
                console.log(department._id)
                next();
            })

        } else {
            res.status(403).send({ message: "Require Department-Coordinator Role!" });
        }
    });
}

const isStudent = (req, res, next) => {
    User.findById(req.userId).exec().then((user) => {
        if(user.role === "student") {
            Student.findOne({email: user.email}).exec().then((student) => {
                req.rollNo=student.rollNo;
                next();
            })
        } else {
            res.status(403).send({ message: "Require Student Role!" });
        }
    });
}

const authJwt = {
    verifyToken,
    isAdmin,
    isDepartmentCoordinator,
    isStudent
};


module.exports = authJwt;