const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
      user: 'rgpgrppg@gmail.com',
      pass: 'ghtr4#332d'
    }
  });
  
  var mailOptions = {
    from: 'rgpgrppg@gmail.com',
    to: 'r1ger_pg@hotmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
  };

  module.exports = {
    transporter: transporter, 
    mailOptions: mailOptions
  }