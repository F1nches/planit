const Trip = require('../models/trip.model');
const Quote = require('../models/quote.model');
const jwt = require('jsonwebtoken');

//Create a trip
exports.tripCreate = function(req, res) {
  console.log(req.file);
  const token = req.headers.authorization.split(" ")[1];
  var decoded = jwt.decode(token, 'cdb5015');
  console.log(decoded);
  console.log(token);
  var packingListObjectArray = [];

  function makeObjectArray(arr1, arr2) {
    for (var i=0; i<arr1.length; i++) {
      let packingItem = {item: arr1[i], packed: false};
      arr2.push(packingItem);
    }
    return arr2;
  }

  makeObjectArray(req.body.packingList, packingListObjectArray);

  let trip = new Trip(
    {
      destination: req.body.destination,
      dateRange: req.body.dateRange,
      packingList: packingListObjectArray,
      author: decoded.id,
      tripImage: req.file.path,
      tripColor: req.body.tripColor
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

//Update a trip's packing list
exports.tripUpdate = function(req, res) {

  console.log(req.body);
  Trip.findByIdAndUpdate(req.params.id, {$set: {'packingList': JSON.parse(req.body.packingList)}}, function(err, trip) {
    console.log(req.body.packingList);
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
// exports.userTrips = function(req, res) {
//
//   // console.log(req.params.author);
//   const token = req.headers.authorization.split(" ")[1];
//   var decoded = jwt.decode(token, 'cdb5015');
//   console.log(decoded);
//
//   if (req.params.author == decoded.id) {
//     Trip.find({author: req.params.author}, function(err, trips) {
//       if (err) return next(err);
//       res.send(trips);
//     });
//   } else {
//     return res.status(401).json({
//       message: 'Unauthorized request.'
//     });
//   }
//
// };

//Return all trips for logged in user
exports.userSpecificTrips = function(req, res) {

  // console.log(req.params.author);
  const token = req.headers.authorization.split(" ")[1];
  var decoded = jwt.decode(token, 'cdb5015');
  console.log(decoded);

  if (decoded.id) {
    Trip.find({author: decoded.id}, function(err, trips) {
      if (err) return next(err);
      res.send(trips);
    });
  } else {
    return res.status(401).json({
      message: 'Unauthorized request.'
    });
  }

};

//Return a random travel quote
exports.quote = function(req, res) {
  Quote.count().exec(function(err, count) {
    var random = Math.floor(Math.random() * count);

    Quote.findOne().skip(random).exec(
      function(err, quote) {
        res.send(quote);
      }
    );
  });
}
