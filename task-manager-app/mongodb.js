/*
 * To be a CRUD module for operations with MongoDB
*/
const MongoClient = require('mongodb').MongoClient;
/*
 * Dummy data methods
 */
const setRandomName = () =>{
  const names = ['Bob', 'John', 'Mary', 'Jane', 'Kate', 'Mike', 'Andrew', 'Nancy', 'Dave', 'Lisa', 'Greg'];
  const randomIndex = Math.floor(Math.random() * names.length);
  return names[randomIndex]
};
const setRandomAge = () => {
  return Math.floor(Math.random() * 80);
}
/*
  Temporary methods to insertOne and insertMany to MongoDB
  TODO: improve code quality
*/
const insertSingle = (dbUrl, dbName, collectionName, dataToInsert) => MongoClient.connect(dbUrl, { useUnifiedTopology: true, useNewUrlParser: true }, function(err, client) {
  if (err){
    return console.error(`\nUnable to connect to the database: ${dbUrl}.\nError stack below:\n`, err)
  }
  console.log(`\ndataToInsert`, JSON.stringify(dataToInsert)+"\n")
  const db = client.db(dbName)
  db.collection(collectionName).insertOne(dataToInsert, (error, result) => {
    if (error){
        console.log(`Unable to update DB ${dbName}: Collection: ${collectionName} \n`, error)
    }
    console.log(`\ninsertSingle -> result:`, JSON.stringify(result.ops)+"\n");
    client.close()
  });
});

const insertMultiple = (dbUrl, dbName, collectionName, arrayToInsert) => MongoClient.connect(dbUrl, { useUnifiedTopology: true, useNewUrlParser: true }, function(err, client) {
  if (err){
    return console.error(`Unable to connect to the database: ${dbUrl}.\nError stack below:\n`, err)
  }
  console.log(`\narrayToInsert`, arrayToInsert)
  const db = client.db(dbName)
  db.collection(collectionName).insertMany(arrayToInsert, (error, result) => {
    if (error){
        console.log(`Unable to update DB ${dbName}: Collection: ${collectionName} \n`, error)
    }
    console.log(`\ninsertMultiple -> result:`, JSON.stringify(result.ops)+"\n");
    client.close()
  });
});

const selectMultiple = (dbUrl, dbName, collectionName, searchObject) => MongoClient.connect(dbUrl, { useUnifiedTopology: true, useNewUrlParser: true }, function(err, client) {
  if (err){
    return console.error(`Unable to connect to the database: ${dbUrl}.\nError stack below:\n`, err)
  }
  console.log(`\searchObject`, searchObject)
  const db = client.db(dbName)
  try {
    db.collection(collectionName).find(searchObject).toArray((error, result) => {
      console.log('selectMultiple -> result:', result)
    })
  } catch (error) {
    return console.log('Error in selectMultiple ->\n', error)
  } finally {
    //process.exit(0);
  }
  });

/*
 * DB constants
*/
const databaseUrl = "mongodb://127.0.0.1:27017/";
const databaseName = "task-manager";
const collectionName = 'users';
/*
*  to test insertSingle

let userData = {
  name: setRandomName(),
  age: setRandomAge()
}
insertSingle(databaseUrl, databaseName, collectionName, userData)

*/

/*
* to test insertMultiple

let idx = 0;
let objArray = [];
while (idx < 5) {
  let userData = {
    name: setRandomName(),
    age: setRandomAge()
  }
  objArray.push(userData);
  idx++;
}
insertMultiple(databaseUrl, databaseName, collectionName, objArray)

*/

// test selectMultiple

// selectMultiple(databaseUrl, databaseName, collectionName, {name: 'Jane'});