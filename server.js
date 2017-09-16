var express = require('express'),
    app = express(),
    stores = require('./stores')
    users = require('./users');
  
app.use(express.static('public'));

app.use('/stores', stores);
app.use('/users', users);

var server = app.listen(process.env.PORT || 3000);

var net = require('net');


// Helper: Get IP Address
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

getNetworkIP(function (error, ip) {
    console.log('Servidor Bolado iniciado em: %s:%s', ip, server.address().port);
    if (error) {
        console.log('error:', error);
    }
});

USERS = [
  {
      "id" : 0,
      "email" : "heiderplopes@gmail.com",
      "password" : "android@rules123",
      "name" : "Heider Lopes",
      "creationDate" : "2017-01-01",
      "streetAddress" : "Avenida Paulista, 1001 - São Paulo, SP",
      "photo" : null,
      "storeId" : 103
  },
  {
      "id" : 1,
      "email" : "ramon@email.com",
      "password" : "1234",
      "name" : "Ramon Honório",
      "creationDate" : "2017-01-01",
      "streetAddress" : "Avenida Paulista, 1201 - São Paulo, SP",
      "photo" : null,
      "storeId" : 101
  },
  {
      "id" : 2,
      "email" : "eoq@email.com",
      "password" : "1234",
      "name" : "EoQ user",
      "creationDate" : "2017-01-01",
      "streetAddress" : "Avenida Paulista, 1202 - São Paulo, SP",
      "photo" : null,
      "storeId" : 102
  },
//   {
//       "id" : 3,
//       "email" : "",
//       "password" : "",
//       "name" : "Empty user",
//       "creationDate" : "2017-01-01",
//       "streetAddress" : "Avenida Paulista, 1203 - São Paulo, SP",
//       "photo" : null,
//       "storeId" : 103
//   }
]

STORES = [
  {
      "id" : 101,
      "userId" : 1,
      "name" : "Tradicional",
      "category" : "Cakes",
      "description" : "O segredo da Tradicional Bolos Caseiros é a fabricação artesanal, fazendo com que cada pedaço de bolo seja legitimamente caseiro.",
      "addressName" : "Rua Clodomiro Amazonas, 150",
      "city" : "São Paulo - SP",
      "urlLogo" : "/cake-images/tradicional-3.png",
      "email" : "tradicional@email.com",
      "phone" : "(11) 4002-8922",
      "rating" : 4.7,
      "priceAverage" : 3,
      "pictures" : [
          "/cake-images/tradicional-3.png", "/cake-images/tradicional-1.jpg", "/cake-images/tradicional-2.jpg", "/cake-images/tradicional-4.jpg"
      ],
      "latitude": -23.585623,
      "longitude": -46.679804,
  },
  {
      "id" : 102,
      "userId" : 2,
      "name" : "Vovó Lurdes",
      "category" : "Party Snacks",
      "description" : "Vendo salgados para festas",
      "addressName" : "Avenida Santo Amaro, 3122",
      "city" : "São Paulo - SP",
      "urlLogo" : "/cake-images/partysnacks-0.jpg",
      "email" : "vovo@email.com",
      "phone" : "(11) 3833-4051",
      "rating" : 3.8,
      "priceAverage" : 1,
      "pictures" : [
          "/cake-images/partysnacks-0.jpg", "/cake-images/partysnacks-2.jpg", "/cake-images/partysnacks-3.jpg", "/cake-images/partysnacks-4.jpg",
      ],
      "latitude": -23.611451,
      "longitude": -46.677783,
  },
  {
    "addressName": "Av. Paulista, 1100",
    "category": "Other",
    "city": "São Paulo - SP",
    "description": "Vendo doces caseiros semelhantes a \n- Jellybeans\n- Kitkats\n- Marshmallows\n- Oreo",
    "email": "heider@fiap.com.br",
    "id": 103,
    "latitude": -23.5640803,
    "longitude": -46.6524362,
    "name": "Lojinha do Heider",
    "phone": "1100000000",
    "pictures" : [
        "/candies/jellybeans.png", "/candies/marshmallows.png", "/candies/kitkat.png", "/candies/oreos.png",
    ],
    "priceAverage": 3,
    "rating": 5,
    "urlLogo": "/candies/marshmallows.png",
    "userId": 0
  }
]