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
        console.log(chalk.green.inverse("Adding new note...", "\nTitle: "+ argv.title, "\nText: "+ argv.text))
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
        console.log(chalk.yellow.inverse("Removing note...", "Title: "+ argv.title));
    }
})

yargs.command({
    command: 'list',
    describe: 'List all notes: app.js list',
    handler: function(argv){
        console.log(chalk.blue.inverse("Listing all notes..."));
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
        console.log(chalk.bgGreen.inverse("Reading note...", "Title: "+ argv.title));
    }
})

yargs.parse();