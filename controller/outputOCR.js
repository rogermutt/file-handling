const Tesseract = require('tesseract.js')

async function imageOutput (file) {

    console.log( 'running imageOutput' );    

    let output = {}
    
    await Tesseract
    .recognize(file.path)
    .catch(err => console.error(err))
    .then(result => {
        output.text = result.text
        output.confidence = result.confidence
    })

    return await output

}

module.exports = imageOutput;  