var Hapi           = require('hapi');
var routes         = require('./routes.js');
var server         = new Hapi.Server();

server.connection({
  host: 'localhost',
  port: Number(process.env.PORT) || 8080
});

server.route(routes);

server.start(
  console.log("server running at port " + server.info.port)
);

module.exports = server;