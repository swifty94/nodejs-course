/*
 * Dummy data constants
 */
const names = ['Bob', 'John', 'Mary', 'Jane', 'Kate', 'Mike', 'Andrew', 'Nancy', 'Dave', 'Lisa', 'Greg'];
const emails = ['bob@email.com', 'jo11@website.com', 'mjjj@mongo.js', 'jane@gmail.com', 'mnzx12@lol.com', '2123@lol.com'];
const tasks = ['Homework', 'Walk the dog', 'Groceries', 'Go to gym', 'Wash the car', 'Cook dinner', 'Send email to boss'];
const statuses = [true,false];
/*
  Random data generation methods
*/
const userObject = {
  name: names[Math.floor(Math.random() * names.length)],
  email: emails[Math.floor(Math.random() * emails.length)],
  age: Math.floor(Math.random() * 80)
};

const taskObject = {
  taskName: tasks[Math.floor(Math.random() * tasks.length)],
  status: statuses[Math.floor(Math.random() * statuses.length)]
};

const jString = (object) => {
    if (typeof object !== 'object'){
        return 'Error: input parameter must be object. Provided:' + typeof object;
    }
    return JSON.stringify(object)
}

module.exports = {
    taskObject : taskObject,
    userObject : userObject,
    jString: jString
}