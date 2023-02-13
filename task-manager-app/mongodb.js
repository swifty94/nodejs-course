/**
 * To be a CRUD module for operations with MongoDB
 */
const MongoClient = require('mongodb').MongoClient;
const crypto = require('crypto');

const setRandomString = () =>{
  return crypto.randomBytes(10).toString('hex')
};
const setRandomInt = () => {
  return Math.floor(Math.random() * 1000000);
}

const insertSingle = (dbUrl, dbName, collectionName, dataToInsert) => MongoClient.connect(dbUrl, { useUnifiedTopology: true, useNewUrlParser: true }, function(err, client) {
  if (err){
    return console.error(`Unable to connect to the database: ${dbUrl}.\nError stack below:\n`, err)
  }
  console.log(`dataToInsert`, JSON.stringify(dataToInsert))
  const db = client.db(dbName)
  db.collection(collectionName).insertOne(dataToInsert, (error, result) => {
    if (error){
        console.log(`Unable to update DB ${dbName}: Collection: ${collectionName} \n`, error)
    }
    console.log(`insertOneWriteOpResultObject:`,result.ops);
    client.close()
  });
});

const insertMultiple = (dbUrl, dbName, collectionName, arrayToInsert) => MongoClient.connect(dbUrl, { useUnifiedTopology: true, useNewUrlParser: true }, function(err, client) {
  if (err){
    return console.error(`Unable to connect to the database: ${dbUrl}.\nError stack below:\n`, err)
  }
  console.log(`arrayToInsert`, arrayToInsert)
  const db = client.db(dbName)
  db.collection(collectionName).insertMany(arrayToInsert, (error, result) => {
    if (error){
        console.log(`Unable to update DB ${dbName}: Collection: ${collectionName} \n`, error)
    }
    console.log(`insertOneWriteOpResultObject:`,result.ops);
    client.close()
  });
});

const databaseUrl = "mongodb://127.0.0.1:27017/";
const databaseName = "secrets";
const collectionName = 'secret-data';

/*
*  to test insertSingle
*/
cnt = 0;
while (cnt < 5) {
    let toInsert = {
      randomString: setRandomString(),
      randomInt: setRandomInt()
    }
    insertSingle(databaseUrl, databaseName, collectionName, toInsert)
    cnt++;
}
/*
* to test insertMultiple
 */
let cnt = 0;
let objArray = [];
while (cnt < 5) {
  let toInsert = {
          randomString: setRandomString(),
          randomInt: setRandomInt()
        }
  objArray.push(toInsert);
  cnt++;
}
insertMultiple(databaseUrl, databaseName, collectionName, objArray)