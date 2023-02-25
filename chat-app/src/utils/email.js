const nodemailer = require('nodemailer');
const settings = require('./settings');

var transporter = nodemailer.createTransport({
  service: settings.SMTP_SERVICE,
  auth: {
    user: settings.SMTP_USERNAME,
    pass: settings.SMTP_PASSWORD
  }
});

var mailOptions = {
  from: settings.SMTP_USERNAME,
  to: 'kirillrudenko1994@gmail.com',
  subject: settings.EMAIL_SUBJECT,
  text: settings.EMAIL_TEXT
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});