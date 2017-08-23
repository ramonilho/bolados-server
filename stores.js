var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.send(STORES);
});

router.get('/:id', function(req, res) {
  var index = req.params.id;
  if (index < STORES.length) {
      res.send(STORES[index]);
  } else {
    res.status(401).send({
        "message": "Store "+index+" not found"
    });
  }
});

const STORES = [
    {
        "id" : 1,
        "name" : "Tradicional",
        "category" : "Cakes",
        "description" : "O segredo da Tradicional Bolos Caseiros é a fabricação artesanal, fazendo com que cada pedaço de bolo seja legitimamente caseiro.",
        "addressName" : "Rua Clodomiro Amazonas, 1200",
        "city" : "São Paulo - SP",
        "urlLogo" : "/cake-images/tradicional-3.png",
        "email" : "tradicional@email.com",
        "phone" : "(11) 4002-8922",
        "rating" : 4.7,
        "priceAverage" : 3,
        "pictures" : [
            "/cake-images/tradicional-3.png", "/cake-images/tradicional-1.jpg", "/cake-images/tradicional-2.jpg", "/cake-images/tradicional-4.jpg"
        ]
    },
    {
        "id" : 2,
        "name" : "Vovó Lurdes",
        "category" : "Salgadinhos",
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
        ]
    }
]

module.exports = router;
