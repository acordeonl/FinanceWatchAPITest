var fs = require('fs');
var util = require('util');

module.exports = d => {
    fs.appendFileSync('debug.log', util.format(d) + '\n');
}