/**
 * To be a CRUD module for operations with MongoDB
 */
const MongoClient = require('mongodb').MongoClient;
const crypto = require('crypto');

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


const databaseUrl = "mongodb://127.0.0.1:27017/";
const databaseName = "secrets";
const collectionName = 'secret-data';
// to test
int = 0;
while (int < 5) {
    const toInsert = {
      randomString: crypto.randomBytes(10).toString('hex'),
      randomInt: Math.floor(Math.random() * 1000000)
    }
    insertSingle(databaseUrl, databaseName, collectionName, toInsert)
    int++;
}