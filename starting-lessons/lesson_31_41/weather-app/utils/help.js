/*
 *      Some helper functions to be included in this module
 */
const fs = require('fs');
const getJsonValue = (jsonKey) => {
    try {
        data =  JSON.parse(fs.readFileSync("./keys.json").toString());
        return data[jsonKey];
    } catch (error) {
        console.log("No keys.json found in the application directory.", error);
    }
}

module.exports = {
    getJsonValue: getJsonValue
}