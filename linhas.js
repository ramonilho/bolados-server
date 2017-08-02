var express = require('express');
var router = express.Router();

// router.get('/', function(req, res) {
//   res.send(LINHAS);
// });

const LINHAS = [
    {
        "cor" : "AZUL",
        "numero" : "1",
        "urlImagem" : "/images/metro_sp.png"
    },
    {
        "cor" : "VERDE",
        "numero" : "2",
        "urlImagem" : "/images/metro_sp.png"
    },
    {
        "cor" : "VERMELHA",
        "numero" : "3",
        "urlImagem" : "/images/metro_sp.png"
    },
    {
        "cor" : "AMARELA",
        "numero" : "4",
        "urlImagem" : "/images/viaquatro.png"
    },
    {
        "cor" : "LILÁS",
        "numero" : "5",
        "urlImagem" : "/images/metro_sp.png"
    },
    {
        "cor" : "PRATA",
        "numero" : "15",
        "urlImagem" : "/images/metro_sp.png"
    },
]


// module.exports = router;