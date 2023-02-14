/*
 * To be a CRUD module for operations with MongoDB
*/
const MongoClient = require('mongodb').MongoClient;
/*
 * DB constants
*/
const databaseUrl = "mongodb://127.0.0.1:27017/";
const databaseName = "task-manager";
const usersCollection = 'users';
const tasksCollection = 'tasks';
/*
 * Dummy data constants
 */
const names = ['Bob', 'John', 'Mary', 'Jane', 'Kate', 'Mike', 'Andrew', 'Nancy', 'Dave', 'Lisa', 'Greg'];
const tasks = ['Homework','Walk the dog','Groceries','Go to gym','Wash the car','Cook dinner','Send email to boss'];
const statuses = [true,false];
/*
  Random data generation methods
*/
const getRandomValueFromArray = (array) =>{
  if (typeof array !== 'object') {
    console.error('Invalid input type for getRandomValueFromArray provided:' + typeof array, '| Must be:object');
    return null;
  }
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex]
};

const setRandomAge = () => {
  return Math.floor(Math.random() * 80);
};

let userObject = {
  name: getRandomValueFromArray(names),
  age: setRandomAge()
};

let taskObject = {
  taskName: getRandomValueFromArray(tasks),
  status: getRandomValueFromArray(statuses)
};
//console.log('Generated dummy taskObject:', taskObject);
//console.log('Generated dummy userObject:', userObject);

/*
  insertOne

MongoClient.connect(databaseUrl, { useUnifiedTopology: true, useNewUrlParser: true }, function(err, client) {
  if (err){
    return console.error(`Unable to connect to the database: ${databaseUrl}.Error stack below:`, err)
  }
  const db = client.db(databaseName)
  db.collection(tasksCollection).insertOne(taskObject, (error, result) => {
    if (error){
        console.log(`Unable to update collection: ${tasksCollection}`, error)
    }
    console.log(`insertOne -> result:`, JSON.stringify(result.ops)+"");
    client.close()
  });
});
*/

/*
  insertMany

MongoClient.connect(databaseUrl,
  { useUnifiedTopology: true, useNewUrlParser: true },
  function(err, client) {
    if (err){
      return console.error(`Unable to connect to the database: ${dbUrl}.\nError stack below:\n`, err)
    }
    console.log(`\narrayToInsert`, arrayToInsert)
    const db = client.db(databaseName)
    db.collection(collectionName).insertMany(arrayToInsert, (error, result) => {
      if (error){
        console.log(`Unable to update collection: ${collectionName} \n`, error)
      }
      console.log(`\insertMany -> result:`, JSON.stringify(result.ops)+"\n");
      client.close()
    });
});
*/

/*

  find (many)

console.log(`Searching for uncompleted tasks`)
MongoClient.connect(databaseUrl, { useUnifiedTopology: true, useNewUrlParser: true }, function(err, client) {
  if (err){
    return console.error(err)
  }
  const db = client.db(databaseName)
  db.collection(tasksCollection).find({status:false}).toArray((error, result) => {
    if (error) {
      return console.error(`Error in find:`, error)
    }
    return console.log('find -> result:', JSON.stringify(result));
    })
  });
*/
/*
  findOne

MongoClient.connect(databaseUrl, { useUnifiedTopology: true, useNewUrlParser: true }, function(err, client) {
  if (err){
    return console.error(`Unable to connect to the database: ${databaseUrl}.\nError stack below:\n`, err)
  }
  const db = client.db(databaseName)
  db.collection(usersCollection).findOne({name:'Mary'}, (error, result) => {
    if (error) {
      return console.log('Error in findOne ->\n', error)
    }
    return console.log('find -> result:', result);
  })
});

*/