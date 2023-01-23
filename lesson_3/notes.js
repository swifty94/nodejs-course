// Module that provide getNotes method and returns notes list (dummy string)
// TODO: try to implement accepting parameter (e.g., array and return it to console.)

// version 1, according to lesson

// const getNotes = function () {
//     return "Your notes are: X, Y, Z ...."
// }


// version 2, just for fun :)

const getNotes = function (notes) {
    /*
    :param - Array
    :return - void -> console.log only
    */
    if (Array.isArray(notes)) {
        // all fine, param is array of notes
        id = 1;
        notes.forEach(element => {
            console.log("Note: "+id+" text: "+element);
            id++;
        });
    } else {
        // error
        console.log("Please provide an array of notes")
        console.log("Your notes are type of: "+typeof notes)
    }
};

module.exports = getNotes;