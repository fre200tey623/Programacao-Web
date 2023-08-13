const express = require('express');

const localController = require('./../controllers/localController');
const route = express.Router();

route
    .route('/agrupado')
    .get(localController.getLocaisAgrupado);

route
    .route('/')
    .get(localController.getLocais);


module.exports = route;