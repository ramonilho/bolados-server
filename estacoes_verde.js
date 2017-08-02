var express = require('express');
var router = express.Router();

// middleware that is specific to this router
/*router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});*/

router.get('/verde/estacoes', function(req, res) {
  res.send(ESTACOES_LINHA_VERDE);
});

const ESTACOES_LINHA_VERDE = [
    {
        "nome" : "Vila Prudente",
        "endereco" : "Avenida Professor Luiz Inácio de Anhaia Mello, 1.359",
        "latitude" : "-23.6462810",
        "longitude" : "-46.6425470",
        "capacidade_passageiro_hora_pico" : 65900,
        "area_construida_m_2" : 19729.26,
        "inauguracao" : "21/08/2010",
        "urlImagem" : "/images/estacao_vila_prudente.jpg"
    }
];

module.exports = router;