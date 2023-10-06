require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')

const insertDepartments = require('./test/department.data')
const insertStudents = require('./test/student.data')
const createStudents = require('./test/user.data')

app.use(express.json())

app.use(cors())


require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);

app.use('*',(req, res) => res.status(404).json({error:"Not Found"}))

mongoose.connect("mongodb+srv://admin:admin@placements.vihlqhn.mongodb.net/?retryWrites=true&w=majority")
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