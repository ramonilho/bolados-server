var express = require('express');
var router = express.Router();

// middleware that is specific to this router
/*router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});*/

router.get('/azul/estacoes', function(req, res) {
  res.send(ESTACOES_LINHA_AZUL);
});

const ESTACOES_LINHA_AZUL = [
    {
        "nome" : "Jabaquara",
        "endereco" : "Rua dos Jequitibás, 80",
        "latitude" : "-23.6462810",
        "longitude" : "-46.6425470",
        "capacidade_passageiro_hora_pico" : 20000,
        "area_construida_m_2" : 6850,
        "inauguracao" : "14/09/1974",
        "urlImagem" : "/images/estacao_jabaquara.jpg"
    },
    {
        "nome" : "Conceição",
        "endereco" : "Av. Eng. Armando de Arruda Pereira, 919",
        "latitude" : "-23.6349220",
        "longitude" : "-46.6411180",
        "capacidade_passageiro_hora_pico" : 20000,
        "area_construida_m_2" : 6850,
        "inauguracao" : "14/09/1974",
        "urlImagem" : "/images/estacao_conceicao.jpg"
    }
];

module.exports = router;