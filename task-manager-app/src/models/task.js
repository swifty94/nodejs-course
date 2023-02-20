const mongoose = require('mongoose');
const TaskSchema = mongoose.Schema({
    description: {
        type: String,
        required: true,
        trim: true
    },
    completed: {
        type: Boolean,
        required: false,
        default: false
    }
});

TaskSchema.pre('save', function async (next){
    const task = this;
    console.log('just before saving task:', task);

    next();
});

const TaskModel = mongoose.model('Task', TaskSchema);

module.exports = TaskModel;