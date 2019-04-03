const formidable = require('formidable');

const emailSender = require('./emailSender');
const imageOutput = require('./outputOCR');
const returnInvoiceAmount = require('./retrieveAmount');

const readFile = req => {

    let form = new formidable.IncomingForm();

    form.parse(req);
  
    form.on('file', async function (name, file){

        await console.log('Uploaded file');
        let string = await imageOutput(file)
        let output = await returnInvoiceAmount(string)
        await console.log('output ', output);

    }); 
}

module.exports = readFile;
