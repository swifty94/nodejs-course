/**
 * CRUD module for operations with MongoDB
 */
const { MongoClient } = require('mongodb');
// new instance of MongoClient from library

// get database connection
const connect = async (databaseUrl, databaseName) => {
    const client = new MongoClient(databaseUrl)
    await client.connect();
    const db = client.db(databaseName);
    if (!db || !client ) {
        return console.log(`ERROR: Can't connect to the URL: ${databaseUrl} DB: ${databaseName}`);
    }
    return console.log(`INFO: Successfully connected to URL: ${databaseUrl} DB: ${databaseName}`);
}

// For testing purposes

// // Connection URL
// const url = 'mongodb://127.0.0.1:27017';
// // Database Name
// const dbName = 'task-manager';
// const dbName2 = 'task-manager2';
// connect(url, dbName);
// connect(url, dbName2);