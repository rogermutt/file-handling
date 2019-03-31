const path = require('path');
const ABSPATH = path.dirname(process.mainModule.filename); 
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

  module.exports = {
    transporter: transporter
  }