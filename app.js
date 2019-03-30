const express = require('express');
const app = express();

const formidable = require('formidable');
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

const port = 3000;

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.listen(port, function(){
  console.log(`Running on port ${port}`);
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname,'public', 'index.html'));
});

app.post('/', function (req, res){

  let form = new formidable.IncomingForm();

  form.parse(req);

  form.on('fileBegin', function (name, file){
      file.path = __dirname + '/data/' + file.name;
  });

  form.on('file', function (name, file){
      console.log('Uploaded ' + file.name);

      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
      
  });
  
  return res.status(200).json({result: 'Upload Success'})

});





