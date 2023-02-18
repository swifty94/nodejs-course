require('../db/mongoose');
const User = require('../models/user');
const express = require('express');
const router = new express.Router();
/*
 * Users routes
*/
router.post('/users', async (req, res) => {
    const user = new User(req.body);
    try {
        await user.save();
        res.status(201).send({UserCreated: user});
    } catch (error) {
        console.log('Error:',error.message);
        return res.status(400).send({'Error:': error.message});
    }
});
router.get('/users', async (req, res) => {
    try {
        const users = await User.find({});
        res.status(200).send({AllUsers: users});
    } catch (error) {
        console.log('Error:',error.message);
        return res.status(500).send({'Error:': error.message});
    }
})
router.get('/users/:id', async (req, res) => {
    try {
        const _id = req.params.id;
        const user = await User.findById(_id);
        if (!user) {
            res.status(404).send();
        }
        res.send({UserFound: user});
    } catch (error) {
        console.log('Error:',error.message);
        return res.status(500).send('Internal Server Error');
    }
})
router.patch('/users/:id', async (req, res) => {
    try {
        const isAllowedUpdate = Object.keys(req.body).every((update) => ['name','age','password','email',].includes(update));
        if (!isAllowedUpdate) {
            return res.status(400).send('Invalid update name or type');
        }
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true});
        if (!user) {
            return res.status(404).send();
        }
        return res.send({UpdateUser: user});
    } catch (error) {
        console.log('Error:',error.message);
        return res.status(500).send('Internal Server Error');
    }
});

router.delete('/users/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) {
            return res.status(404).send();
        }
        return res.send({DeletedUser: user});
    } catch (error) {
        console.log('Error:',error.message);
        return res.status(500).send('Internal Server Error');
    }
});

module.exports = router;