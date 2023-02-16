const express = require('express');
require('./db/mongoose');
const Task = require('./models/task');
const User = require('./models/user');

const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());

app.post('/users', (req, res) => {
    const user = new User(req.body);
    console.log('new User model created:', JSON.stringify(req.body));
    user.save().then(() => {
            console.log('new User saved to DB:', JSON.stringify(user));
            res.status(201).send({'New user': user})
        }).catch((error) => {
            console.log('Error while saving to DB: ',error.message);
            res.status(400).send({'Error': error.message})
        });
});


app.post('/tasks', (req, res) => {
    const task = new Task(req.body);
    console.log('new Task model created:', JSON.stringify(req.body));
    task.save().then(() => {
            console.log('new Task saved to DB:', JSON.stringify(task));
            res.status(201).send({'New task': task})
        }).catch((error) => {
            console.log('Error while saving to DB: ',error.message);
            res.status(400).send({'Error': error.message})
        });
});

app.listen(port, () => {
    console.log(`App listening on ${port}`);
});