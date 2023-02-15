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
let userObject = {
  name: names[Math.floor(Math.random() * names.length)],
  age: Math.floor(Math.random() * 80)
};

let taskObject = {
  taskName: tasks[Math.floor(Math.random() * tasks.length)],
  status: statuses[Math.floor(Math.random() * statuses.length)]
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
  db.collection(usersCollection).insertOne(userObject, (error, result) => {
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

MongoClient.connect(databaseUrl, { useUnifiedTopology: true, useNewUrlParser: true }, function(err, client) {
  if (err){
    return console.error(err)
  }
  const db = client.db(databaseName)
  db.collection(usersCollection).find({}).toArray((error, result) => {
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

/**
 * updateMany

MongoClient.connect(databaseUrl, { useUnifiedTopology: true, useNewUrlParser: true }, function(err, client) {
  if (err){
    return console.error(`Unable to connect to the database: ${databaseUrl}.\nError stack below:\n`, err)
  }
  const db = client.db(databaseName)
  db.collection(tasksCollection).updateMany({
    status: false
  }, {
    $set: {status:true}
  }).then((result) => {
    console.log('Updated records:',result.modifiedCount);
  }).catch((error) => {
    console.error('Error:',error);
  });
});

*/

/**
 *  deleteMany
 */

MongoClient.connect(databaseUrl, { useUnifiedTopology: true, useNewUrlParser: true }, function(err, client) {
  if (err){
    return console.error(`Unable to connect to the database: ${databaseUrl}.\nError stack below:\n`, err)
  }
  const db = client.db(databaseName)
  db.collection(usersCollection).deleteMany({
    age:{$gt:40}
  }).then((result) => {
    console.log('Removed users older than 40 years:',result.deletedCount);
  }).catch((error) => {
    console.error('Error:',error);
  });
});