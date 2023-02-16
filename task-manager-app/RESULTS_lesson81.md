Mongo DB lessons 75-81;

16.02
- Already worked with:
  - insertOne + insertMany
  - findOne + find
  - updateOne + updateMany
  - deleteOne + deleteMany

So far all the calls like insertOne and/or findOne are not properly wrapped to return some data
Hence, for now, they are commented out and I assume in the further lessons we'll cover that

Below are some examples of calling each method separately with different input parameters according to the lessons tasks and getting the results back.

- Test inserting to users collection
<pre>
~/task-manager-app (master)$ x=1; while [ $x -le 10 ]; do node mongodb.js; printf '\n';x=$(( $x + 1 )); done

Generated dummy userObject: { name: 'Mary', age: 69 }
insertSingle -> result: [{"name":"Mary","age":69,"_id":"63ebe23f130127362cacc81f"}]

Generated dummy userObject: { name: 'Jane', age: 70 }
insertSingle -> result: [{"name":"Jane","age":70,"_id":"63ebe240e8dc383ca0607acb"}]

Generated dummy userObject: { name: 'Dave', age: 36 }
insertSingle -> result: [{"name":"Dave","age":36,"_id":"63ebe242017ea834a023ec6f"}]

Generated dummy userObject: { name: 'Lisa', age: 50 }
insertSingle -> result: [{"name":"Lisa","age":50,"_id":"63ebe24322eb673e3cf361c7"}]

Generated dummy userObject: { name: 'Mary', age: 25 }
insertSingle -> result: [{"name":"Mary","age":25,"_id":"63ebe2453a2e533cb874a0f5"}]

Generated dummy userObject: { name: 'Lisa', age: 19 }
insertSingle -> result: [{"name":"Lisa","age":19,"_id":"63ebe2462a1ac549f41ba085"}]

Generated dummy userObject: { name: 'Mary', age: 62 }
insertSingle -> result: [{"name":"Mary","age":62,"_id":"63ebe247970dcd116c631e6f"}]

Generated dummy userObject: { name: 'Kate', age: 15 }
insertSingle -> result: [{"name":"Kate","age":15,"_id":"63ebe249bf6a23518cdadf0e"}]

Generated dummy userObject: { name: 'Kate', age: 63 }
insertSingle -> result: [{"name":"Kate","age":63,"_id":"63ebe24a8cc4ff4dbc5d88dc"}]

Generated dummy userObject: { name: 'Andrew', age: 63 }
insertSingle -> result: [{"name":"Andrew","age":63,"_id":"63ebe24c64c85551b8675795"}]
</pre>

- Test inserting to tasks collection
<pre>
~/task-manager-app (master)$ x=1; while [ $x -le 10 ]; do node mongodb.js; printf '\n';x=$(( $x + 1 )); done
Generated dummy taskObject: { taskName: 'Walk the dog', status: false }
insertSingle -> result: [{"taskName":"Walk the dog","status":false,"_id":"63ebe2e7a01c014130b43d4b"}]

Generated dummy taskObject: { taskName: 'Wash the car', status: false }
insertSingle -> result: [{"taskName":"Wash the car","status":false,"_id":"63ebe2e88fba37379ca71efb"}]

Generated dummy taskObject: { taskName: 'Groceries', status: true }
insertSingle -> result: [{"taskName":"Groceries","status":true,"_id":"63ebe2eab0802d34c05ec685"}]

Generated dummy taskObject: { taskName: 'Walk the dog', status: true }
insertSingle -> result: [{"taskName":"Walk the dog","status":true,"_id":"63ebe2eb658b20518cca4294"}]

Generated dummy taskObject: { taskName: 'Send email to boss', status: true }
insertSingle -> result: [{"taskName":"Send email to boss","status":true,"_id":"63ebe2ed1fffbc14045500c3"}]

Generated dummy taskObject: { taskName: 'Walk the dog', status: false }
insertSingle -> result: [{"taskName":"Walk the dog","status":false,"_id":"63ebe2eed63f2b05fcdf7cb5"}]

Generated dummy taskObject: { taskName: 'Walk the dog', status: true }
insertSingle -> result: [{"taskName":"Walk the dog","status":true,"_id":"63ebe2ef8836582578c969e0"}]

Generated dummy taskObject: { taskName: 'Cook dinner', status: true }
insertSingle -> result: [{"taskName":"Cook dinner","status":true,"_id":"63ebe2f1571f37471058cee5"}]

Generated dummy taskObject: { taskName: 'Groceries', status: true }
insertSingle -> result: [{"taskName":"Groceries","status":true,"_id":"63ebe2f25f4d1f0814b0e4c6"}]

Generated dummy taskObject: { taskName: 'Wash the car', status: true }
insertSingle -> result: [{"taskName":"Wash the car","status":true,"_id":"63ebe2f4bf89754d50394aef"}]
</pre>

- Search for uncompleted tasks
<pre>
~/task-manager-app (master)$ node mongodb.js
Searching for uncompleted tasks
find -> result: [{"_id":"63ebe2e7a01c014130b43d4b","taskName":"Walk the dog","status":false},{"_id":"63ebe2e88fba37379ca71efb","taskName":"Wash the car","status":false},{"_id":"63ebe2eed63f2b05fcdf7cb5","taskName":"Walk the dog","status":false}]
</pre>

- Search for users younger than 30 years old
<pre>
db.collection(usersCollection).find({age:{$lt:30}}).toArray()
</pre>
<pre>
~/task-manager-app (master)$ node mongodb.js
Searching for users younger 30 years old
find -> result: [{"_id":"63ebe2453a2e533cb874a0f5","name":"Mary","age":25},{"_id":"63ebe2462a1ac549f41ba085","name":"Lisa","age":19},{"_id":"63ebe249bf6a23518cdadf0e","name":"Kate","age":15}]
</pre>

- Update incomplete tasks (status-false) to true (back and forth)
<pre>
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

[nodemon] restarting due to changes...
[nodemon] starting `node mongodb.js`
Updated records: 0
[nodemon] restarting due to changes...
[nodemon] starting `node mongodb.js`
Updated records: 30
[nodemon] restarting due to changes...
[nodemon] starting `node mongodb.js`
Updated records: 0
</pre>

- Delete from collection
<pre>
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

~/task-manager-app (master)$ nodemon mongodb.js
[nodemon] 2.0.20
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node mongodb.js`
Removed users older than 40 years: 15
</pre>