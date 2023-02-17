const express = require('express');
require('./db/mongoose');
const os = require('os');
const Task = require('./models/task');
const User = require('./models/user');
const HOST = os.hostname();
const _PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.post('/users', async (req, res) => {
    const user = new User(req.body);
    try {
        await user.save();
        res.status(201).send({'UserCreated:': user});
    } catch (error) {
        console.log('Error:',error.message);
        res.status(400).send({'Error:': error.message});
    }
});

app.get('/users', async (req, res) => {
    try {
        const users = await User.find({});
        res.status(200).send(users);
    } catch (error) {
        console.log('Error:',error.message);
        res.status(400).send({'Error:': error.message});
    }
})


app.get('/users/:id', async (req, res) => {
    try {
        const _id = req.params.id;
        const user = await User.findById(_id);
        if (!user) {
            res.status(404).send();
        }
        res.send(user);
    } catch (error) {
        console.log('Error:',error.message);
        res.status(500).send('Internal Server Error');
    }
})

app.post('/tasks', async (req, res) => {
    try {
        const task = new Task(req.body);
        await task.save();
        res.status(201).send({'TaskCreated': task})
    } catch (error) {
        console.log('Error:', error);
        res.status(400).send({'Error': error})
    }
});

app.get('/tasks', async (req, res) => {
    try {
        const task = await Task.find({});
        res.send(task);
    } catch (error) {
        res.status(500).send({'Error': error});
    }
})


app.get('/tasks/:id', async (req, res) => {
    try {
        const _id = req.params.id;
        const task = await Task.findById(_id);
        if (!task) {
            res.status(404).send({'Response':'No such task'});
        };
        res.send(task);
    } catch (error) {
        console.log(error.message);
        res.status(500).send('Internal Server Error');
    }
})

app.get('*', (req, res) => {
    const uriScheme = [];
    app._router.stack.forEach(function(r){
        if (r.route && r.route.path && r.route.path !== '*'){
            const method = {
                resource: r.route.path,
                httpMethod: r.route.stack[0].method
            };
            uriScheme.push(method);
        };
    });
    const description = {
        'Resources + HTTP methods available' : uriScheme,
        'NOTES': {
            1: 'To do GET request click on method on this page.',
            2: 'Use cURL, Postman/SOAP UI or any other tool to perform POST requests'
        }
    };
    res.send(description);
})

const URL_BASE = `http://${HOST}:${_PORT}/`;
app.listen(_PORT, () => {
    console.log(`Server is running on ${URL_BASE}`);
});