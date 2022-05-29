const mongoose = require('mongoose');

const TeacherSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        index: true, sparse: true,
    },
    photo: String,
    address:String,
    qualification:String,
    country:String,
    state:String,
    pincode:Number,
    city:String,
    gender:String,
    experience:String,
    language:String,
    father:String,
    phone:String,
    dob:String,
    status: {
        type: Number,
        default: 1
    },
    created_at: {
        type: Date,
        default: Date.now()
    },
    updated_at: {
        type: Date,
        default: Date.now()
    },
    deleted_at: Date,
})

module.exports = mongoose.models.Teacher || mongoose.model('Teacher', TeacherSchema);