// Module that provide getNotes method and returns notes list (dummy string)

const getNotes = function (notes) {
    /*
    :param - Array
    :return - void -> console.log only
    */
    if (Array.isArray(notes)) {
        // all fine, param is array of notes
        id = 1;
        notes.forEach(element => {
            console.log(onSuccess("Note: "+id+" text: "+element));
            id++;
        });
    } else {
        // error
        console.log(onFail("Please provide an array of notes"));
        console.log(onFail("Your notes are type of: "+typeof notes));
    }
};

module.exports = getNotes;