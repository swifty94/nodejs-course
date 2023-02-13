/**
 * To be a CRUD module for operations with MongoDB
 */
const MongoClient = require('mongodb').MongoClient;
const crypto = require('crypto');
/*
 * Dummy data methods
 */
const setRandomString = () =>{
  return crypto.randomBytes(10).toString('hex')
};
const setRandomInt = () => {
  return Math.floor(Math.random() * 1000000);
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

const databaseUrl = "mongodb://127.0.0.1:27017/";
const databaseName = "secrets";
const collectionName = 'secret-data';
/*
*  to test insertSingle
*/
let toInsert = {
  randomString: setRandomString(),
  randomInt: setRandomInt()
}
insertSingle(databaseUrl, databaseName, collectionName, toInsert)
/*
* to test insertMultiple
 */
let idx = 0;
let objArray = [];
while (idx < 5) {
  let toInsert = {
          randomString: setRandomString(),
          randomInt: setRandomInt()
        }
  objArray.push(toInsert);
  idx++;
}
insertMultiple(databaseUrl, databaseName, collectionName, objArray)