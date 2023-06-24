const dotenv = require('dotenv');
dotenv.config({path: './config.env'});
const mongoose = require('mongoose');
const app = require('./app.js');

const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);

mongoose.connect(DB);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`app running on port ${port}`);
});