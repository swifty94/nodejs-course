const notes = require('./notes.js')
const yargs = require('yargs');
const chalk = require('chalk');

yargs.command({
    command: 'add',
    describe: 'Add a new note: app.js add --title="Hello" --text="World"',
    builder: {
        title: {
            describe: 'Title of the note',
            type:'string',
            demandOption: true
        },
        text: {
            describe: 'Text of the note',
            type:'string',
            demandOption: true
        }
    },
    handler: function(argv){
        notes.add(argv.title, argv.text);
    }
})
yargs.command({
    command:'remove',
    describe: 'Remove a note: app.js remove --title="Hello"',
    builder: {
        title: {
            describe: 'Title of the note',
            type:'string',
            demandOption: true
        }
    },
    handler: function(argv){
        notes.remove(argv.title);
    }
})

yargs.command({
    command: 'list',
    describe: 'List all notes: app.js list',
    handler: function(){
        notes.list();
    }
})

yargs.command({
    command:'read',
    describe: 'Read a note: app.js read --title="Hello"',
    builder: {
        title: {
            describe: 'Title of the note',
            type:'string',
            demandOption: true
        }
    },
    handler: function(argv){
        notes.read(argv.title);
    }
})

yargs.parse();
