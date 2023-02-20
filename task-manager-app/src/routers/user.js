require('../db/mongoose');
const UserModel = require('../models/user');
const express = require('express');
const router = new express.Router();
/*
 * UserModels routes
*/
router.post('/users', async (req, res) => {
    const user = new UserModel(req.body);
    try {
        await user.save();
        res.status(201).send({UserModelCreated: user});
    } catch (error) {
        console.log('Error:',error);
        res.status(400).send({'Error:': error});
    }
});
router.get('/users', async (req, res) => {
    try {
        const users = await UserModel.find({});
        return res.status(200).send({AllUserModels: users});
    } catch (error) {
        return res.status(500).send();
    }
})
router.get('/users/:id', async (req, res) => {
    try {
        const _id = req.params.id;
        const user = await UserModel.findById(_id);
        if (!user) {
            res.status(404).send();
        }
        return res.send({UserModelFound: user});
    } catch (error) {
        return res.status(500).send();
    }
})
router.patch('/users/:id', async (req, res) => {
    updates = ['name','age','password','email',];
    const isAllowedUpdate = Object.keys(req.body).every((update) => updates.includes(update));
    if (!isAllowedUpdate) {
        return res.status(400).send('Invalid update name or type');
    }
    try {
        const user = await UserModel.findById(req.params.id);
        updates.forEach((update) => user[update] = req.body[update]);
        await user.save();
        // const user = await UserModel.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true});
        if (!user) {
            return res.status(404).send();
        }
        return res.send({UpdateUserModel: user});
    } catch (error) {
        console.error(error);
        return res.status(500).send();
    }
});

router.delete('/users/:id', async (req, res) => {
    try {
        const user = await UserModel.findByIdAndDelete(req.params.id);
        if (!user) {
            return res.status(404).send();
        }
        return res.send({DeletedUserModel: user});
    } catch (error) {
        return res.status(500).send();
    }
});

module.exports = router;