const mongoose = require('mongoose');
const feeTypeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    amount: {
        type: Number,
        required: true,
    },
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


module.exports = mongoose.models.FeeType || mongoose.model('FeeType', feeTypeSchema);