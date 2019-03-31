const express = require('express');
const router = express.Router();

const formidable = require('formidable');

const nodemailer = require('../config/nodemailer');
const transporter = nodemailer.transporter;
const mailOptions = nodemailer.mailOptions;

const fs = require('fs');

const regexEmail = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi

router.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

router.post('/', function (req, res){

  let form = new formidable.IncomingForm();

  form.parse(req);

  form.on('fileBegin', function (name, file){
    console.log('__dirname' + __dirname);
    file.path = '/Users/Roger/file-translator/data/test.txt';
  });

  form.on('file', function (name, file){
      console.log('Uploaded ' + file.name);
      
      fs.readFile(`./data/${file.name}`, 'utf-8', function(err, data) {
        
          if (err) throw err;
          
          let emailsArray = data.match(regexEmail);

          console.log('Found email: ', emailsArray[0])

          let mailOptions = {
            from: 'rgpgrppg@gmail.com',
            to: emailsArray[0],
            subject: `Please find attached ${file.name}`,
            text: 'That was easy!',
            attachments: [
                {
                 path: `./data/${file.name}`
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
      
  });
  
  return res.status(200).json({result: 'Upload Success'})

});

module.exports = router;
