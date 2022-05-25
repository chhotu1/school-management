const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        index: true, sparse: true,
    },
    photo:  String,
    address:String,
    country:String,
    state:String,
    occupation:String,
    pincode:Number,
    city:String,
    gender:String,
    class:String,
    father_name:String,
    father_mobile:String,
    dob:String,
    created_by: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
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

module.exports = mongoose.models.Student || mongoose.model('Student', StudentSchema);