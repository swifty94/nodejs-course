Mongo DB lessons 75-81;

11.02 - learning/playing with new technologies

<pre>
~\task-manager-app>node mongodb.js

dataToInsert {"randomString":"3157a689464d2dac14da","randomInt":864537}


arrayToInsert [
  { randomString: 'c73189c32f543c048ee5', randomInt: 274809 },
  { randomString: 'b670f715e0e8e084d039', randomInt: 996012 },
  { randomString: 'b30b71f619b2f4e2be61', randomInt: 824896 },
  { randomString: 'd2e3c231082f32573875', randomInt: 132625 },
  { randomString: '3a823c3d7416c1d81b2d', randomInt: 981036 } 
]

insertSingle -> result: [{"randomString":"3157a689464d2dac14da","randomInt":864537,"_id":"63eaafab2b28a71de06a0496"}]


insertMultiple -> result: [{"randomString":"c73189c32f543c048ee5","randomInt":274809,"_id":"63eaafab2b28a71de06a0497"},{"randomString":"b670f715e0e8e084d039","randomInt":996012,"_id":"63eaafab2b28a71de06a0498"},{"randomString":"b30b71f619b2f4e2be61","randomInt":824896,"_id":"63eaafab2b28a71de06a0499"},{"randomString":"d2e3c231082f32573875","randomInt":132625,"_id":"63eaafab2b28a71de06a049a"},{"randomString":"3a823c3d7416c1d81b2d","randomInt":981036,"_id":"63eaafab2b28a71de06a049b"}]

~\task-manager-app>
</pre>


// TODO:
- create a structure of the project
- create installation/usage documentation
- screenshots of results
