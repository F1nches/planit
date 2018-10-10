const Trip = require('../models/trip.model');
const jwt = require('jsonwebtoken');

//Create a trip
exports.tripCreate = function(req, res) {

  const token = req.headers.authorization.split(" ")[1];
  var decoded = jwt.decode(token, 'cdb5015');
  console.log(decoded);

  let trip = new Trip(
    {
      destination: req.body.destination,
      arrival: req.body.arrival,
      departure: req.body.departure,
      packingList: req.body.packingList,
      author: decoded.id
    }
  );

  trip.save(function(err) {
    if (err) {
      console.log('there was an error');
      return next(err);
    }
    res.send('Trip created successfully.');
  });

};

//Update a trip
exports.tripUpdate = function(req, res) {

  Trip.findByIdAndUpdate(req.params.id, {$set: req.body}, function(err, trip) {
    if (err) return next(err);
    res.send('Trip updated.');
  });

};

//Read a trip
exports.tripDetails = function(req, res) {

  Trip.findById(req.params.id, function(err, trip) {
    if (err) return next(err);
    res.send(trip);
  });

};


//Delete a trip
exports.tripDelete = function(req, res) {

  Trip.findByIdAndRemove(req.params.id, function (err) {
      if (err) return next(err);
      res.send('Deleted successfully!');
  });

};

//Return all trips for logged in user
exports.userTrips = function(req, res) {

  // console.log(req.params.author);
  const token = req.headers.authorization.split(" ")[1];
  var decoded = jwt.decode(token, 'cdb5015');
  console.log(decoded);

  if (req.params.author == decoded.id) {
    Trip.find({author: req.params.author}, function(err, trips) {
      if (err) return next(err);
      res.send(trips);
    });
  } else {
    return res.status(401).json({
      message: 'Unauthorized request.'
    });
  }

};