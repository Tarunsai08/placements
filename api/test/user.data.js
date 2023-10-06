const axios = require('axios');
const User = require('../model/user.model');

const studentEmails =[
    'bendalamsanjay.21.cse@anits.edu.in',
    'dhulitarunvarahasai.21.cse@anits.edu.in',
    'kotaramkumar.21.cse@anits.edu.in',
    'puthetiasreeth.21.cse@anits.edu.in',
    'alluhemanth27@gmail.com'
]

const createUserAccount = async (email, password) => {
    const response = await axios.post('http://localhost:5000/api/auth/signup/', {
        "email":email,
        "password":password,
        "role": 'student'
    });

    return response.data;
};

const createStudents = async () => {
    User.countDocuments({role: 'student'}).then(async (count) => {
        if (count === 0) {
            console.log('Creating student accounts...');
            for (const email of studentEmails) {
                const password = 'password'
                const user = await createUserAccount(email, password);
                console.log(user);
            }
        } else {
            console.log('Student accounts already exist.');
        }
    })
}

module.exports = createStudents;