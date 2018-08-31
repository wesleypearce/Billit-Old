var http = require('http');

function wakeHeroku() {
  setInterval(function() {
    http.get("http://<your app name>.herokuapp.com");
  }, 300000); // every 5 minutes (300000)
}

module.exports = wakeHeroku