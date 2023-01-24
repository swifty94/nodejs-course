// Module that provide getNotes method and returns notes list (dummy string)

const chalk = require("chalk");
/*
required using 4.1.2 version of chalk in package.json
https://stackoverflow.com/questions/70309135/chalk-error-err-require-esm-require-of-es-module/70425265#70425265
new version of chalk says to use syntax like import chalk from 'chalk'; which will fail here :(
*/

// functions to affect the console.log output color
const onSuccess = chalk.bold.green;
const onFail = chalk.bold.red;

// main method of module
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