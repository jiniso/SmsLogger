const express       = require('express');
const bodyParser    = require('body-parser');
const cors          = require('cors');
const mongoose      = require('mongoose');
const routes        = require('./routes/index');

require('dotenv').config();

mongoose.connect(process.env.MONGO_CONN_STRING, { useNewUrlParser: true });
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  console.log("Connection Successful! " + process.env.MONGO_CONN_STRING);
});

const app = express(); 
const port = process.env.PORT || 3030;

app.use(cors( {origin: '*'} ));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use('/api', routes);

app.listen(port, function() { 
    console.log('Running on PORT: ' + port);
});