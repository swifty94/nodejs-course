const chalk = require('chalk');
const fs = require('fs');

const loadNotes = function(){
    try {
        return JSON.parse(fs.readFileSync('notes.json').toString());
    } catch (error) {
        return [];
    }
}

const saveNotes = function(notes) {
    fs.writeFileSync('notes.json', JSON.stringify(notes));
}

const add = function (title, text) {
    const notes = loadNotes();
    const duplicates = notes.filter(function (note) {
        return note.title === title;
    })
    if (duplicates.length === 0) {
        notes.push({
            title: title,
            text: text
        });
        saveNotes(notes);
        console.log(chalk.green.bold('Note added: ') + title)
    } else {
        console.log(chalk.red.bold('Duplicate title: ') + title)
    }
}

const remove = function (title){
    const notes = loadNotes();
    notes.forEach(function(note){
        idx = notes.indexOf(note)
        if (note.title === title) {
            notes.splice(notes.indexOf(note), 1);
        }
    })
    console.log(chalk.green.bold("Removed item: ", title))
    saveNotes(notes);
    console.log("List of all notes updated\n", loadNotes());
}

const read = function (title) {
    const notes = loadNotes();
    notes.forEach(function (note) {
        if (note.title === title) {
            console.log(chalk.green.bold("Found the note you've searched.\n") + chalk.yellow.bold("\nTitle: " + note.text + "\nText: " + note.text));
        }
    });
}

const list = function () {
    try {
        console.log("List of all notes\n", loadNotes());
    } catch (error) {
        console.log("Error: " + error);
    };
}

module.exports = {
    add,
    read,
    remove,
    list
}