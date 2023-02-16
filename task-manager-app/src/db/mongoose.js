const mongoose = require('mongoose');
const { jString } = require('../utils/helper');
const helper = require('../utils/helper');

// creating data model for MongoDB

const User = mongoose.model('User',{
    name: {
        type: String
    },
    age: {
        type: Number
    }
});

const Task = mongoose.model('Task',{
    taskName: {
        type: String
    },
    status: {
        type: Boolean
    }
});


// create some random user and task related data

console.log('Export of taskObject from helper:', helper.taskObject);
console.log('Export of userObject from helper:', helper.userObject);

const randomTask = new Task(helper.taskObject);
const randomUser = new User(helper.userObject);

console.log('new Task() object:', jString(randomTask));
console.log('new User() object:', jString(randomUser));


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