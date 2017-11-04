const express = require('express');
var mongoose = require('mongoose');
var mongoDB = 'mongodb://127.0.0.1/pharmaDB';
var db = mongoose.connection;
const bodyParser = require('body-parser');
const app = express();

var doctor_controller = require("./controllers/doctor");

app.use(bodyParser.urlencoded({extended: true}));
// app.use(bodyParser.json());

app.listen(3000, function() {
  console.log('listening on 3000');
});

mongoose.connect(mongoDB, function (err, res) {
  if (err) {
    console.log ('ERROR connecting to: ' + mongoDB + '. ' + err);
  } else {
    console.log ('Succeeded connected to: ' + mongoDB);
  }
});
db.on('error', console.error.bind(console, 'MongoDB connection error:'));



// test returning dummy response in landing page
app.get('/', (req, res) => {
  res.send("Sa3eeda!");
});

// save dummy doctor using the actual schema for doctors
app.post('/doctor', (req, res) => {
  var dummyDoc = doctor_controller.insertDummyDoctor();
  res.send(dummyDoc);
});
