/**
 * To be a CRUD module for operations with MongoDB
 */
const MongoClient = require('mongodb').MongoClient;
const crypto = require('crypto');
const databaseUrl = "mongodb://127.0.0.1:27017/";
const databaseName = "secrets";

const connect = (dbUrl) => MongoClient.connect(dbUrl, { useUnifiedTopology: true, useNewUrlParser: true }, function(err, client) {
  if (err){
    return console.error(`Unable to connect to the database: ${dbUrl}.\nError stack below:\n`, err)
  }
  console.log("ConnectionToUrl:: ", dbUrl)
  const db = client.db(databaseName)
  let toInsert = {
    randomString: crypto.randomBytes(10).toString('hex'),
    randomInt: Math.floor(Math.random() * 1000000)
  }
  db.collection('secret-data').insertOne(toInsert, (error, result) => {
    if (error){
        console.log(`Fail: \n`, error)
    }
    console.log(`DocumentToInsert`, JSON.stringify(toInsert))
    console.log(`InsertedDocument:`,result.ops);
    client.close()
  });
});

// to test
int = 0;
while (int < 5) {
    connect(databaseUrl)
    int++;
}