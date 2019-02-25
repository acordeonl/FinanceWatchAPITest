var stockLookup = require('./services/stockLookup') ;
var controllers = { 
    stockTicker:require('./controllers/stockTicker')
}

async function main() { 
    let payload = await stockLookup.getPriceLogoNewsSummary('aapl') ;
    let res = controllers['stockTicker']['test']('firme') ;
    console.log(res);
    console.log(payload);
}

main() ;