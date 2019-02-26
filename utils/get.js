'use strict';
var request = require('request');

module.exports = async (url) => {
    let requestPromiseR;
    let requestPromise = new Promise(resolve => requestPromiseR = resolve);
    let response;
    let errorMessage;
    request.get({
        url: url,
        json: true,
        headers: { 'User-Agent': 'request' }
    }, (err, res, data) => {
        if (err) {
            console.log('Error:', err);
            errorMessage = err;
            requestPromiseR();
        } else if (res.statusCode !== 200) {
            errorMessage = res.body ;
            console.log('Status:', res.statusCode);
            requestPromiseR();
        } else {
            // data is already parsed as JSON:
            response = data;
            requestPromiseR();
        }
    });
    await requestPromise;
    if(!response)
        throw new Error(errorMessage) ;
    return response;
}
