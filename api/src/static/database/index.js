const mongoose = require('mongoose');
require("dotenv").config();

mongoose.connect(process.env.URL_DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.Promise = global.Promise;

mongoose.connection.on('connected', () => {
    console.log('Connected 🔥')
})

module.exports = mongoose;