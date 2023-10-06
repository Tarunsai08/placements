require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')
const insertDepartments = require('./test/department.data')
const insertStudents = require('./test/student.data')
const createStudents = require('./test/user.data')

app.use(express.json())


require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);

app.use('*',(req, res) => res.status(404).json({error:"Not Found"}))

mongoose.connect(process.env.MONGODB_URI)
    .then(async () => {
        console.log('MongoDB connected')
        await insertDepartments()
        await insertStudents()
        await createStudents()
        app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`)
        })
    })
    .catch(err => {
        console.log(err)
    })