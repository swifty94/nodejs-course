const mongoose = require('mongoose');

mongoose.set('strictQuery', true);
mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api');
// .then(() => {
//     randomTask.save().then(() => {
//         console.log('Saved to DB:', jString(randomTask));
//     }).catch((error) => {
//         console.log('Error while saving to DB: ',error.message);
//     });
//     randomUser.save().then(() => {
//         console.log('Saved to DB:', jString(randomUser));
//     }).catch((error) => {
//         console.log('Error while saving to DB: ',error.message);
//     });
// })