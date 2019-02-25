## Description

API built with Node.js. Project includes a file structure designed to easily add routes, controllers and services in order to build new endpoints. Routes include GET requests with query parameters. The following CURL command gets a response with a payload for the symbol specified on the query parameters. 

` curl -X GET 
 'http://localhost:3000/stockTicker?symbol=msft'`
 
Project includes a package.json for running unit tests with [Jest](https://jestjs.io/).

## Project built with

`node v11.8.0`  `npm v6.5.0`

## Setup

### Runing Server 

Open project's root folder and run `node server.js`. This should start a server on port 3000 with a single endpoint (/stockTicker?symbol=:symbol).

### Runing Tests 

Run `npm install` on root folder and then run `jest`.



