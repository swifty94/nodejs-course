const fs = require('fs');

const getValue = (jsonKey) => {
    try {
        data =  JSON.parse(fs.readFileSync("./config.json").toString());
        return data[jsonKey];
    } catch (error) {
        console.log("No app.json found in the application directory.", error);
        return;
    }
}

module.exports = Settings = {
    SMTP_SERVICE: getValue('SMTP_SERVICE'),
    SMTP_USERNAME: getValue('SMTP_USERNAME'),
    SMTP_PASSWORD: getValue('SMTP_PASSWORD'),
    EMAIL_SUBJECT: getValue('EMAIL_SUBJECT'),
    EMAIL_TEXT: getValue('EMAIL_TEXT'),
};