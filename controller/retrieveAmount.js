
async function returnInvoiceAmount(string) {

    console.log( 'running returnInvoiceAmount' );

    let { text, confidence } = string

    let regex = /\$[\d|,|.|e|E|\+]+/gi 

    let amountDue = await text
        .match(regex)
        .map(amount => amount.replace("$", ""))
        .map(el=> parseFloat(el))
        .reduce((a, b) => Math.max(a, b))
    
    return confidence < 50 ? `We think the amount is $${amountDue} ?` : `$${amountDue}`
}

module.exports = returnInvoiceAmount;


