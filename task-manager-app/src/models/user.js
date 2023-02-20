const mongoose = require('mongoose');
const validator = require('validator');

const UserSchema = mongoose.Schema({
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

UserSchema.pre('save', function async (next){
    const user = this;
    console.log('just before saving user:', user);

    next();
});

const UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;