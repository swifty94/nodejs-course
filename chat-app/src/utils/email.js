const nodemailer = require('nodemailer');
const settings = require('./settings');

var emailClient = nodemailer.createTransport({
  service: settings.SMTP_SERVICE,
  auth: {
    user: settings.SMTP_USERNAME,
    pass: settings.SMTP_PASSWORD
  }
});

var emailOptions = {
  from: settings.SMTP_USERNAME,
  to: 'kirillrudenko1994@gmail.com',
  subject: settings.EMAIL_SUBJECT,
  text: settings.EMAIL_TEXT
};

emailClient.sendMail(emailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('SMTPTransport.SentMessageInfo: ' + info);
  }
});