const formidable = require('formidable');

const emailSender = require('./emailSender');
const imageOutput = require('./outputOCR');

const readFile = req => {

    let form = new formidable.IncomingForm();

    form.parse(req);
  
    form.on('file', async function (name, file){

        await console.log('Uploaded file');
        let test = await imageOutput(file)
        await console.log('test ', test);

    }); 
}

module.exports = readFile;
