require('../db/mongoose');
const Task = require('../models/task');
const express = require('express');
const router = new express.Router();
/*
 * Tasks routes
*/
router.post('/tasks', async (req, res) => {
    try {
        const task = new Task(req.body);
        await task.save();
        res.status(201).send({TaskCreated: task});
    } catch (error) {
        res.status(400).send({'Error': error});
    }
});
router.get('/tasks', async (req, res) => {
    try {
        const task = await Task.find({});
        res.send(task);
    } catch (error) {
        return res.status(500).send();
    }
})
router.get('/tasks/:id', async (req, res) => {
    try {
        const _id = req.params.id;
        const task = await Task.findById(_id);
        if (!task) {
            res.status(404).send({Response:'No such task'});
        };
        res.send(task);
    } catch (error) {
        return res.status(500).send();
    }
})
router.patch('/tasks/:id', async (req, res) => {
    try {
        const isAllowedUpdate = Object.keys(req.body).every((update) => ['description','completed',].includes(update));
        if (!isAllowedUpdate) {
            return res.status(400).send('Invalid update name or type');
        }
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true});
        if (!task) {
            return res.status(404).send();
        }
        return res.send({UpdatedTask: task});
    } catch (error) {
        return res.status(500).send();
    }
});
router.delete('/tasks/:id', async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id);
        if (!task) {
            return res.status(404).send();
        }
        return res.send({DeletedTask: task});
    } catch (error) {
        return res.status(500).send();
    }
});

module.exports = router;