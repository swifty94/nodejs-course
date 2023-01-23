const fs = require('fs');

/*
Lesson to use fs module + write and/or append to file
Below is "home task" to append, not to just writeFileSync.
I've make it more interesting using for loop
*/
let fileName = 'app.log';
console.log("BEGIN: Writing to file");
for (let index = 0; index < 1000; index++) {
        let line = "--- New log line number: "+index+ "\n"
        fs.appendFileSync(fileName, line);
    };
console.log("END: Writing to file");