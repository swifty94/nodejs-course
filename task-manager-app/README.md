- 16.02

Lesson 85-86. Data validation + sanitization in models

<pre>
~ /task-manager-app (master)$
[nodemon] restarting due to changes...
[nodemon] starting `node src\db\mongoose.js`
new Task() model: {"taskName":"Groceries","status":true,"_id":"63ee566538c86cd31a6ea1fe"}
new User() model: {"name":"test","email":"test@example.com","password":"password","age":10,"_id":"63ee566538c86cd31a6ea1ff"}
Error while saving to DB:  User validation failed: password: Password cannot be `password` 
Saved to DB: {"taskName":"Groceries","status":true,"_id":"63ee566538c86cd31a6ea1fe","__v":0}
[nodemon] restarting due to changes...
[nodemon] starting `node src\db\mongoose.js`
new Task() model: {"taskName":"Send email to boss","status":false,"_id":"63ee566d36880e1c77475d1d"}
new User() model: {"name":"test","email":"test@example.com","password":"test","age":10,"_id":"63ee566d36880e1c77475d1e"}
Error while saving to DB:  User validation failed: password: Path `password` (`test`) is shorter than the minimum allowed length (6).
Saved to DB: {"taskName":"Send email to boss","status":false,"_id":"63ee566d36880e1c77475d1d","__v":0}
[nodemon] restarting due to changes...
[nodemon] starting `node src\db\mongoose.js`
new Task() model: {"taskName":"Groceries","status":false,"_id":"63ee5673f7e03b7399b7e02b"}
new User() model: {"name":"test","email":"test@example.com","password":"test12312","age":10,"_id":"63ee5673f7e03b7399b7e02c"}
Saved to DB: {"name":"test","email":"test@example.com","password":"test12312","age":10,"_id":"63ee5673f7e03b7399b7e02c","__v":0}
Saved to DB: {"taskName":"Groceries","status":false,"_id":"63ee5673f7e03b7399b7e02b","__v":0}
</pre>