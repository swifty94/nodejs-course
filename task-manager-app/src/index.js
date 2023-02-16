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

app.get('/users', (req, res) => {
    User.find({}).then((users) => {
        res.send(users);
    }).catch((error) => {
        res.status(500).send();
    });
})


app.get('/users/:id', (req, res) => {
    const _id = req.params.id;
    User.findById(_id).then((user) => {
        if (!user){
            res.status(404).send();
        }
        console.log(`ID ${_id} matched: `, user)
        res.send(user);
    }).catch((error) => {
        res.status(500).send();
    });
})

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

app.get('/tasks', (req, res) => {
    Task.find({}).then((task) => {
        res.send(task);
    }).catch((error) => {
        res.status(500).send();
    });
})


app.get('/tasks/:id', (req, res) => {
    const _id = req.params.id;
    Task.findById(_id).then((task) => {
        if (!task){
            res.status(404).send();
        }
        console.log(`ID ${_id} matched: `, task)
        res.send(task);
    }).catch((error) => {
        res.status(500).send();
    });
})

app.listen(port, () => {
    console.log(`App listening on ${port}`);
});