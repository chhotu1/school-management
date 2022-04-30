const mongoose = require('mongoose');
import Helpers from '../Helpers';
const RoleSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    role: {
        type: Number,
        required: true,
        unique: true,
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


module.exports = mongoose.models.Role || mongoose.model('Role', RoleSchema);