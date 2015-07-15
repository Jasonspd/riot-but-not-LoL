var Path  = require("path");
var index = Path.join(__dirname, "../index.html");

module.exports = {

  home: function(request, reply) {
    return reply.file(index);
  }
};