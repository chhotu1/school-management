const mongoose = require('mongoose');
import Helpers from '../Helpers';
const SliderSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    image:String,
    created_by: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    status: {
        type: Number,
        default: Helpers.STATUS.ACTIVE
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


module.exports = mongoose.models.Slider || mongoose.model('Slider', SliderSchema);