require('dotenv').config()

const express = require('express')
const index = express()
const mongoose = require('mongoose')
const cors = require('cors')
const dotenv = require('dotenv')

const insertDepartments = require('./test/department.data')
const insertStudents = require('./test/student.data')
const createStudents = require('./test/user.data')

index.use(express.json())

dotenv.config()
index.use(cors())


require('./routes/auth.routes')(index);
require('./routes/user.routes')(index);

index.use('*',(req, res) => res.status(404).json({error:"Not Found"}))

mongoose.connect(process.env.MONGODB_URI)
    .then(async () => {
        console.log('MongoDB connected')
        await insertDepartments()
        await insertStudents()
        await createStudents()
        index.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`)
        })
    })
    .catch(err => {
        console.log(err)
    })