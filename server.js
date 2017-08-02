var express = require('express'),
    app = express(),
    stores = require('./stores');

app.use(express.static('public'));

app.use('/stores', stores);

var server = app.listen(3000);

console.log('Servidor Bolado iniciado na porta %s', server.address().port);