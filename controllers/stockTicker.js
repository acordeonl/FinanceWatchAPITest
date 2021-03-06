var { getPriceLogoNewsSummary } = require('../services/stockLookup');
var getDate = require('../utils/getDate');

module.exports = {
    fetchStockTicker: async (req, res) => {
        var urlParams = new URLSearchParams(req.url.split('?')[1]);
        var entries = urlParams.entries();
        let symbol ;
        for (pair of entries) 
            if(pair[0] === 'symbol')
                symbol = pair[1] ;
        if(!symbol){
            res.writeHead(400, {
                'Content-Type': 'text/html'
            }); // http header
            res.write('<h1> Bad Request </h1>'); //write a response
            req.logToFile(`BAD REQUEST 404 ${req.url} ${getDate()}`) ;
            res.end(); //end the response
            return ;
        }
        let payload = await getPriceLogoNewsSummary(symbol);
        res.writeHead(200, { "Content-Type": "application/json" });
        var json = JSON.stringify(payload);
        req.logToFile(`SUCCESSFULL REQUEST 200 ${req.url} ${getDate()}`) ;
        res.end(json);
    },
    test: arg => {
        return arg;
    }
}