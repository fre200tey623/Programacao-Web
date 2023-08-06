const cors = require('cors');
const express = require('express');
const dotenv = require('dotenv');
dotenv.config({path: './config.env'});

const declaracaoRoutes = require('./routes/declaracaoRoutes')
const authRoutes = require('./routes/authRoutes')

const app = express();
const globalErrorHandle = require('./controllers/errorController')

app.use(express.json());
app.use(cors());

app.use('/declaracao', declaracaoRoutes);
app.use('/usuario', authRoutes);

app.use(globalErrorHandle.errorHandle);

module.exports = app;