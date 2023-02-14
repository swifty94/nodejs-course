Mongo DB lessons 75-81;

14.02 - insertOne and insertMany is learned.

<pre>
~\task-manager-app>node mongodb.js

dataToInsert {"name":"Lisa","age":3}

arrayToInsert [
  { name: 'Dave', age: 10 },
  { name: 'Greg', age: 75 },
  { name: 'Jane', age: 20 },
  { name: 'Jane', age: 77 },
  { name: 'Jane', age: 2 }
]

insertSingle -> result: [{"name":"Lisa","age":3,"_id":"63eb6dff4824c60a90d14ef2"}]

insertMultiple -> result: [{"name":"Dave","age":10,"_id":"63eb6dff4824c60a90d14ef3"},{"name":"Greg","age":75,"_id":"63eb6dff4824c60a90d14ef4"},{"name":"Jane","age":20,"_id":"63eb6dff4824c60a90d14ef5"},{"name":"Jane","age":77,"_id":"63eb6dff4824c60a90d14ef6"},{"name":"Jane","age":2,"_id":"63eb6dff4824c60a90d14ef7"}]

~\task-manager-app>
</pre>

// TODO:
- create a structure of the project
- create installation/usage documentation
- screenshots of results
