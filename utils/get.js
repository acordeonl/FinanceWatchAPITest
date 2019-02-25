'use strict';
var request = require('request');

module.exports = async ( url ) => {
    let requestPromiseR ; 
    let requestPromise = new Promise(resolve => requestPromiseR = resolve);
    let response ;
    request.get({
        url: url,
        json: true,
        headers: {'User-Agent': 'request'}
      }, (err, res, data) => {
        if (err) {
          console.log('Error:', err);
        } else if (res.statusCode !== 200) {
          console.log('Status:', res.statusCode);
        } else {
          // data is already parsed as JSON:
          response = data ;
          requestPromiseR() ;
        }
    });
    await requestPromise ; 
    return response ; 
}
