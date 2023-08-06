const mongoose = require('mongoose');
const app = require('./app.js');

const DB = process.env.DATABASE

mongoose.connect(DB);

const port = process.env.PORT || 3000;

app.listen(port, () => {
      console.log(`app running on port ${port}`);
});