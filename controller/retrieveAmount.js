
async function returnInvoiceAmount(string) {

    console.log( 'running returnInvoiceAmount' );

    let { text, confidence } = string

    let regex = /\$[\d|,|.|e|E|\+]+/gi 

    let raw_string_amount_array = text.match(regex)
    let num_amount_array = raw_string_amount_array.map(amount => amount.replace("$", ""))
    
    let clean_num_amount_array = num_amount_array.map(el=> parseFloat(el))
    
    let final = clean_num_amount_array.reduce(function(a, b) {
        return Math.max(a, b);
    });

    return await final

}

module.exports = returnInvoiceAmount;


