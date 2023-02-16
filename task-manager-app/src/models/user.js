const mongoose = require('mongoose');
const validator = require('validator');
const User = mongoose.model('User',{
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error(value);
            }
        }
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minLength: 6,
        validate(value) {
            if (value.includes('password')) {
                throw new Error('Password cannot be `password` ');
            }
        }
    },
    age: {
        type: Number,
        required: true,
        default: 1,
        validate(value) {
            if (value <= 0){
                throw new Error(value);
            }
        }
    }
});

module.exports = User;