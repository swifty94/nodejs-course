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
            res.send({'Response': `User created: ${user.name}`})
        }).catch((error) => {
            console.log('Error while saving to DB: ',error.message);
            res.send({'Error': `${error.message}`})
        });
});

app.listen(port, () => {
    console.log(`App listening on ${port}`);
});