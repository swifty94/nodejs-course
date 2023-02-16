- 16.02

Lesson 92 completed. Building REST API for usage alongside MongoDB + Express for out task application.

<pre>
~ /task-manager-app (master)$npm run dev

> task-manager-app@1.0.0 dev
> nodemon src/index.js

[nodemon] 2.0.20
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node src/index.js`
Server is running on http://DESKTOP-Q9IEVFL:3000/
new User model created: {"name":"Mary Jane","age":42,"email":"mj@bob.com","password":"supersecret"}
Saved to DB {"name":"Mary Jane","email":"mj@bob.com","password":"supersecret","age":42,"_id":"63ee7aa0ddf872adf57f9182","__v":0}
new Task model created: {"description":"Wash my head"}
Saved to DB: {"description":"Wash my head","completed":false,"_id":"63ee7aa5ddf872adf57f9184","__v":0}
ID 63ee7aa0ddf872adf57f9182 matched:  {"_id":"63ee7aa0ddf872adf57f9182","name":"Mary Jane","email":"mj@bob.com","password":"supersecret","age":42,"__v":0}
ID 63ee7aa5ddf872adf57f9184 matched:  {"_id":"63ee7aa5ddf872adf57f9184","description":"Wash my head","completed":false,"__v":0}
</pre>