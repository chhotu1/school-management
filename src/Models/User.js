const mongoose = require('mongoose');
const bcrypt = require("bcryptjs");


const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        index: true, sparse: true,
    },
    password: {
        type: String,
        required: true
    },
    phone: String,
    photo: {
        type: String
    },
    role: {
        type: Number,
        default: 1
    },
    address:String,
    country:String,
    state:String,
    pincode:Number,
    city:String,
    gender:String,
    class:String,
    father:String,
    dob:String,
    qualification:String,
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


UserSchema.pre('save', function (next) {

    const user = this;
    const now = new Date();
    user.updated_at = now;

    if (!user.created_at) {
        user.created_at = now;
    }

    if (!user.isModified('password')) {
        return next();
    }

    // generate a salt
    bcrypt.genSalt(10, (err, salt) => {
        if (err) {
            return next(err);
        }

        // hash the password using our new salt
        bcrypt.hash(user.password, salt, (err1, hash) => {
            if (err1) { return next(err1); }
            // override the cleartext password with the hashed one
            user.password = hash;
            next();
        });
    });
});

module.exports = mongoose.models.User || mongoose.model('User', UserSchema);