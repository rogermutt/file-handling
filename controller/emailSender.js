const fs = require('fs');
const nodemailer = require('../config/nodemailer');
const transporter = nodemailer.transporter;

const regexEmail = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi

const emailSender = filename => {

    fs.readFile(`./data/${filename}`, 'utf-8', function(err, data) {
            
        if (err) throw err;
        
        let emailsArray = data.match(regexEmail);

        console.log('Found email: ', emailsArray[0])

        let mailOptions = {
        from: 'rgpgrppg@gmail.com',
        to: emailsArray[0],
        subject: `Please find attached ${filename}`,
        text: 'That was easy!',
        attachments: [
            {
            path: `./data/${filename}`
            }
        ]    
        };

        transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent');
        }
        }); 

    }); 
}

module.exports = emailSender;    