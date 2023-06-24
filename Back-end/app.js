const cors = require('cors');
const express = require('express');

const declaracaoRoutes = require('./routes/declaracaoRoutes')

const app = express();
const globalErrorHandle = require('./controllers/errorController')

app.use(express.json());
app.use(cors());

app.use('/api/v1/declaracao', declaracaoRoutes)

app.use(globalErrorHandle.errorHandle);

module.exports = app;