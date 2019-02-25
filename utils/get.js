'use strict';
var request = require('request');

module.exports = async (url) => {
    let requestPromiseR;
    let requestPromise = new Promise(resolve => requestPromiseR = resolve);
    let response;
    let responseCode;
    request.get({
        url: url,
        json: true,
        headers: { 'User-Agent': 'request' }
    }, (err, res, data) => {
        if (err) {
            console.log('Error:', err);
            responseCode = 500;
            requestPromiseR();
        } else if (res.statusCode !== 200) {
            responseCode = res.statusCode ;
            console.log('Status:', res.statusCode);
            requestPromiseR();
        } else {
            // data is already parsed as JSON:
            responseCode = 200 ; 
            response = data;
            requestPromiseR();
        }
    });
    await requestPromise;
    if(!response)
        throw new Error(responseCode) ;
    return response;
}
