var Path = require("path");
var handler = require("./handlers.js");

var routes = [

  {
    path: "/",
    method: "GET",
    handler: handler.home
  },

  {
    path: "/{param}",
    method: "GET",
    handler: {
      directory: {
        path: Path.join(__dirname + "/../")
      }
    }
  }

];

module.exports = routes;