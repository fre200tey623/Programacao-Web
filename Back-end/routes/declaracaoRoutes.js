const express = require('express');
const declaracaoController = require('./../controllers/declaracaoController');

const route = express.Router()

// route.route('/')
//     .get(declaracaoController.getAllDeclaracoes);

route.route('/1')
    .post(declaracaoController.getQuestao1);
route.route('/2')
    .post(declaracaoController.getQuestao2);
route.route('/3')
    .post(declaracaoController.getQuestao3);
route.route('/4')
    .post(declaracaoController.getQuestao4);
route.route('/5')
    .post(declaracaoController.getQuestao5);
route.route('/6')
    .post(declaracaoController.getQuestao6);
route.route('/7')
    .post(declaracaoController.getQuestao7);
route.route('/8')
    .post(declaracaoController.getQuestao8);
route.route('/9')
    .post(declaracaoController.getQuestao9);
route.route('/10')
    .post(declaracaoController.getQuestao10);


module.exports = route