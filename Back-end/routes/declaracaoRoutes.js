const express = require('express');
const declaracaoController = require('./../controllers/declaracaoController');

const route = express.Router()

// route.route('/')
//     .get(declaracaoController.getAllDeclaracoes);

route.route('/1')
    .get(declaracaoController.getQuestao1);
route.route('/2')
    .get(declaracaoController.getQuestao2);
route.route('/3')
    .get(declaracaoController.getQuestao3);
route.route('/4')
    .get(declaracaoController.getQuestao4);
route.route('/5')
    .get(declaracaoController.getQuestao5);
route.route('/6')
    .get(declaracaoController.getQuestao6);
route.route('/7')
    .get(declaracaoController.getQuestao7);
route.route('/8')
    .get(declaracaoController.getQuestao8);
route.route('/9')
    .get(declaracaoController.getQuestao9);
route.route('/10')
    .get(declaracaoController.getQuestao10);


module.exports = route