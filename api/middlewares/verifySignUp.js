const db = require("../model");
const ROLES = db.ROLES;
const User = db.user;

const checkDuplicateEmail = (req, res, next) => {
    User.findOne({
        email: req.body.email
    }).exec().then(( user) => {

        if (user) {
            res.status(400).send({ message: "Failed! Email is already in use!" });
            return;
        }
        next();
    });
}


const checkRolesExisted = (req, res, next) => {
    if (req.body.role) {
        if (!ROLES.includes(req.body.role)) {
            res.status(400).send({
                message: `Failed! Role ${req.body.role} does not exist!`
            });
            return;
        }
    }

    next();
};

const verifySignUp = {
    checkDuplicateEmail,
    checkRolesExisted
};

module.exports = verifySignUp;