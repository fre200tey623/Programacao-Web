const dotenv = require('dotenv');
dotenv.config({path: './config.env'});
const mongoose = require('mongoose');
const app = require('./app.js');
const https = require('https')
// const fs = require('fs')

// const path = require('path');


const DB = process.env.DATABASE

mongoose.connect(DB);


// let key = fs.readFileSync(path.join(__dirname,'cert','key.pem'),'utf-8')
// let cert = fs.readFileSync(path.join(__dirname,'cert','cert.pem'),'utf-8')

// const parameters = {
//     key: key,
//     cert: cert
// }

const port = process.env.PORT || 3000;
// const server = https.createServer(parameters,app);
// server.listen(port, () => {
//     console.log(`app running on port ${port}`);
// });
app.listen(port, () => {
      console.log(`app running on port ${port}`);
});