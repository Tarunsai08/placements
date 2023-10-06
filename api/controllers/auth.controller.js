const db = require("../model");
const User = db.user;
const Role = db.role;
const mongoose = require("mongoose");

let jwt = require("jsonwebtoken");
let bcrypt = require("bcryptjs");

const config = process.env.JWT_SECRET

exports.signup = (req, res) => {
    console.log(req.body)
    const user = new User({
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8),
        role: req.body.role
    });

    user.save().then(() => {
        res.send({message: "User was registered successfully!"});
    })
};

exports.signin = (req, res) => {
    User.findOne({
        email: req.body.email
    }).then( (user) => {
        if (!user) {
            return res.status(404).send({message: "User Not found."});
        }

        let passwordIsValid = bcrypt.compareSync(req.body.password, user.password);

        if (!passwordIsValid) {
            console.log("password is invalid");
            return res.status(401).send({
                accessToken: null, message: "Invalid Password!"
            });
        }
        console.log("password is valid");
        const token = jwt.sign({id: user.id}, config, {
            algorithm: 'HS256', allowInsecureKeySizes: true, expiresIn: 86400, // 24 hours
        });

        res.status(200).send({
            id: user._id, email: user.email, role: user.role, accessToken: token
        });
    });
};