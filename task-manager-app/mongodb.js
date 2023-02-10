const { Connection } = require('mongodb/lib/core');

/**
 * CRUD module for operations with MongoDB
 */
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/";

const connect = (dbUrl) => MongoClient.connect(dbUrl, { useUnifiedTopology: true, useNewUrlParser: true }, function(err, db) {
  if (err){
    return console.error(`Unable to connect to the database: ${dbUrl}.\nError stack below:\n`, err)
  }
  console.log("Connected to database: ", dbUrl)
  process.exit(0);
});

// to test
connect(url)