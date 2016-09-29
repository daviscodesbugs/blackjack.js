console.log("Spinning up...");

'use strict';

const Hapi = require('hapi');
const server = new Hapi.Server();
server.connection({ port: 3000 });
var routes = require('./src/routes');

server.route(routes);
server.start((err) => {

    if (err) {
        throw err;
    }
    console.log(`Server running at: ${server.info.uri}`);
});