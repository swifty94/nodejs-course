require('../src/db/mongoose');
const Task = require('../src/models/task');

// task id 63eea1354d26f0b7a935648f to delete

Task.findByIdAndDelete('63eea1354d26f0b7a935648f').then((task) => {
    console.log(task);
    return Task.countDocuments({completed: false});
}).then((count) => {
    console.log('Count incomplete tasks', count);
}).catch((err) => {
    console.error(err);
});