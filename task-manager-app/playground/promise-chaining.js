require('../src/db/mongoose');
const User = require('../src/models/user');


// 63eea57c65db02226c370c82 Bobby user

User.findByIdAndUpdate('63eea57c65db02226c370c82', {age: 21}).then((user) => {
    console.log(user);
    return User.countDocuments({age: 42});
}).then((count) => {
    console.log('Count of users with age 42 is', count);
}).catch((err) => {
    console.error(err);
});