const mongoose = require('mongoose');
const { jString, userObject, taskObject } = require('../utils/helper');
const validator = require('validator');

// creating data model for MongoDB
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
            if (value === 'password') {
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

const Task = mongoose.model('Task',{
    taskName: {
        type: String,
        required: true,
        trim: true
    },
    status: {
        type: Boolean,
        required: true,
        default: false
    }
});
// create some random user and task related data models for Mongoose
const randomTask = new Task(taskObject);
const randomUser = new User(userObject);
console.log('new Task() model:', jString(randomTask));
console.log('new User() model:', jString(randomUser));

// insert into MongoDB using Mongoose Promise
mongoose.set('strictQuery', true);
mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api').then(() => {
    randomTask.save().then(() => {
        console.log('Saved to DB:', jString(randomTask));
    }).catch((error) => {
        console.log('Error while saving to DB: ',error.message);
    });
    randomUser.save().then(() => {
        console.log('Saved to DB:', jString(randomUser));
    }).catch((error) => {
        console.log('Error while saving to DB: ',error.message);
    });
})