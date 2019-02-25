// microsoft tick
// https://api.iextrading.com/1.0/stock/msft/price
// https://api.iextrading.com/1.0/stock/msft/news/last
// https://api.iextrading.com/1.0/stock/msft/logo

var http = require("http");
var { routes } = require('./config/routes') ;
var logToFile = require('./utils/logToFile');
var controllers = { 
    stockTicker:require('./controllers/stockTicker')
}

function getController(path) {
    path = path.split("?")[0];
    for(let i = 0 ; i < routes.length ; i ++ )
        if(path === routes[i].path)
            return routes[i] ;
    return undefined ;
}

//create a server object:
http.createServer(async (req, res) => {
    try{
        let route = getController(req.url) ;
        req.logToFile = logToFile ;
        req.logToFile (`REQUEST ${req.url} ${new Date()}`)
        if(!route) {
            req.logToFile (`NOT FOUND 404 ${req.url}` );
            res.writeHead(404, {
                'Content-Type': 'text/html'
            }); // http header
            res.write('<h1> Not Found </h1>'); //write a response
            res.end(); //end the response
            return ;
        }
        await controllers[route.controller][route.action](req,res) ;
    }
    catch (err) {
        req.logToFile (`INTERNAL SERVER ERROR 500 ${req.url}` );
        res.writeHead(500, {
            'Content-Type': 'text/html'
        }); // http header
        res.write('<h1> Internal Server Error </h1>'); //write a response
        res.end(); //end the response
        return ;
    }
}).listen(3000, function () {
    console.log("server start at port 3000", new Date()); //the server object listens on port 3000
});