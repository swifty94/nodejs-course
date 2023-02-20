require('../db/mongoose');
const TaskModel = require('../models/task');
const express = require('express');
const router = new express.Router();
/*
 * TaskModels routes
*/
router.post('/tasks', async (req, res) => {
    try {
        const task = new TaskModel(req.body);
        await task.save();
        res.status(201).send({TaskModelCreated: task});
    } catch (error) {
        res.status(400).send({'Error': error});
    }
});
router.get('/tasks', async (req, res) => {
    try {
        const task = await TaskModel.find({});
        res.send(task);
    } catch (error) {
        return res.status(500).send();
    }
})
router.get('/tasks/:id', async (req, res) => {
    try {
        const _id = req.params.id;
        const task = await TaskModel.findById(_id);
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
        const task = await TaskModel.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true});
        if (!task) {
            return res.status(404).send();
        }
        return res.send({UpdatedTaskModel: task});
    } catch (error) {
        return res.status(500).send();
    }
});
router.delete('/tasks/:id', async (req, res) => {
    try {
        const task = await TaskModel.findByIdAndDelete(req.params.id);
        if (!task) {
            return res.status(404).send();
        }
        return res.send({DeletedTaskModel: task});
    } catch (error) {
        return res.status(500).send();
    }
});

module.exports = router;