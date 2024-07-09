import express from 'express'
import mongoose from 'mongoose'
import Employee from './models/company.js'
import dummyDataGenerator from './functions/dummy_data_generator.js'

mongoose.connect('mongodb://localhost:27017/company')

const app = express()
const port = 3000

app.use("/public", express.static('public'))
app.set('view engine', 'ejs')
app.set('views', './templates')


app.get('/', async (req, res) => {
    res.render('home')
})

app.get('/generatedata', async (req, res) => {
    let employees = []
    for (let i = 0; i < 10; i++) {
        employees.push(dummyDataGenerator())
    }
    await Employee.insertMany(employees)
    res.send(employees)
})

app.get('/deletedata', async (req, res) => {
    await Employee.deleteMany({})
    res.send({ message: "Data deleted" })
})



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})