const formidable = require('formidable');

const emailSender = require('./emailSender');

const readFile = req => {

    let form = new formidable.IncomingForm();

    form.parse(req);
  
    form.on('file', function (name, file){
        console.log('Uploaded ' + file.name);
        emailSender(file.name);  
    }); 
}

module.exports = readFile;