require('../src/db/mongoose');
const User = require('../src/models/user');


// 63eea57c65db02226c370c82 Bobby user

// promise chaining pattern

// User.findByIdAndUpdate('63eea57c65db02226c370c82', {age: 21}).then((user) => {
//     console.log(user);
//     return User.countDocuments({age: 42});
// }).then((count) => {
//     console.log('Count of users with age 42 is', count);
// }).catch((err) => {
//     console.error(err);
// });

// async/await pattern

/**
 *
 * @param {string} id
 * @param {number} age
 * @return {Promise} {Promise} number|null
 */
const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age });
    const count = await User.countDocuments({ age });
    return count
};

updateAgeAndCount('63eea57c65db02226c370c82', 42).then((count) => {
    console.log('updateAgeAndCount:', count)
}).catch(error => {
    console.info('Error:', error);
});