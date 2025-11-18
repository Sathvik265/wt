const mongoose = require('mongoose')

const PatientSchema = new mongoose.Schema({
    patientName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    role:{
        type:String,
        default:"user"
    }
})

const Patient = mongoose.model('Patient',PatientSchema)
module.exports = Patient