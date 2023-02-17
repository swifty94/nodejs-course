/*
TASK:
    - create notes.js file
    - create getNotes function returning notes
    - export getNotes to app.js and call it
*/
const getNotes = require('./notes.js');

//let myNotes = ["Wake up", "Go to shower", "Make a coffee", "Get back to work"];
//getNotes(myNotes);

/*
Will cause:

C:\Users\nodejs-course\lesson_3>node app.js
Note: 1 text: Wake up
Note: 2 text: Go to shower
Note: 3 text: Make a coffee
Note: 4 text: Get back to work
*/
let wrongNotesType = 12;
getNotes(wrongNotesType);
/*
let wrongNotesType = 12;
getNotes(wrongNotesType);

Will cause:

C:\Users\nodejs-course\lesson_3>node app.js
Please provide an array of notes
Your notes are type of: number

So basic error handling is in place

*/