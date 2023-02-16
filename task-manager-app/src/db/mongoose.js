const mongoose = require('mongoose');
const { jString, userObject, taskObject } = require('../utils/helper');
const validator = require('validator');

// creating data model for MongoDB
const User = mongoose.model('User',{
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error(value);
            }
        }
    },
    age: {
        type: Number,
        required: true,
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
        required: true
    },
    status: {
        type: Boolean,
        required: true
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