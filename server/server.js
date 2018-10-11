const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const trip = require('./routes/trip.route');
const user = require('./routes/user.route');

const app = express();


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


// Parse incoming request bodies in middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use('/api', trip);
app.use('/users', user);

//Local server port
let port = 8000;

// Set up mongoose connection
let dev_db_url = 'mongodb://admin:password@ds119820.mlab.com:19820/planit';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

//Log out to console to let us know the server is working
app.listen(port, () => {
  console.log('Server running on port number ' + port);
});
