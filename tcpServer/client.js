var api = {};
global.api = api;
api.net = require('net');

var socket = new api.net.Socket();
var user;

socket.connect({
  port: 2000,
  host: '127.0.0.1',
}, function() {
  socket.on('data', function(data) {
    var task = JSON.parse(data);
    console.log(task);
    var result = task.map(function (item) {
       return item * 2;
     });
     socket.write(JSON.stringify(result));
     socket.destroy();
   });
});
