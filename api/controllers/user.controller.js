exports.studentBoard = (req, res) => {
    res.status(200).send("Student Content.");
};

exports.adminBoard = (req, res) => {
    res.status(200).send("Admin Content.");
};

exports.departmentBoard = (req, res) => {
    res.status(200).send("Department Content.");
};