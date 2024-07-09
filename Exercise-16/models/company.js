import mongoose, { model } from "mongoose";

const employeeSchema = new mongoose.Schema({
    name: String,
    age: Number,
    city: String,
    salary: Number,
    department: String,
    isManager: Boolean
})

const Employee = mongoose.model('employee', employeeSchema)
export default Employee