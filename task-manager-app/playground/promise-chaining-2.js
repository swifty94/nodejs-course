require('../src/db/mongoose');
const Task = require('../src/models/task');

// promise chaining pattern

// Task.findByIdAndDelete('63eea1354d26f0b7a935648f').then((task) => {
//     console.log(task);
//     return Task.countDocuments({completed: false});
// }).then((count) => {
//     console.log('Count incomplete tasks', count);
// }).catch((err) => {
//     console.error(err);
// });

// async/await pattern

/**
 *
 * @param {string} id
 * @param {boolean} completed
 * @return {Promise} {Promise} number|null
 */
const deleteTaskAndCount = async (id, completed) => {
    const task = await Task.findByIdAndDelete(id);
    const count = await Task.countDocuments({completed});
    return count;
}

// task id 63eea0e24d26f0b7a9356487 to delete

deleteTaskAndCount("63eea0e24d26f0b7a9356487", false).then((count) => {
    console.log('Incomplete tasks: ', count);
}).catch((error) => {
    console.log(error);
});