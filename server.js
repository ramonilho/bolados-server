// Get IP
function getNetworkIP(callback) {
  var socket = net.createConnection(80, 'www.google.com');
  socket.on('connect', function() {
    callback(undefined, socket.address().address);
    socket.end();
  });
  socket.on('error', function(e) {
    callback(e, 'error');
  });
}

var express = require('express'),
    app = express(),
    stores = require('./stores')
    users = require('./users');

app.use(express.static('public'));

app.use('/stores', stores);
app.use('/users', users);

var server = app.listen(3000);

var net = require('net');

getNetworkIP(function (error, ip) {
    console.log('Servidor Bolado iniciado em: %s:%s', ip, server.address().port);
    if (error) {
        console.log('error:', error);
    }
});
