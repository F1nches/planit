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
  var totalDaysArray = [];

  function makeObjectArray(arr1, arr2) {
    for (var i=0; i<arr1.length; i++) {
      let packingItem = {item: arr1[i], packed: false};
      arr2.push(packingItem);
    }
    return arr2;
  }

  function numberOfDays(dateRange, totalNumber) {

    var dates = dateRange.split('-');
    var dayNumber = Math.abs((Date.parse(dates[1]) - Date.parse(dates[0])))/(1000*60*60*24) + 1;

    console.log('dayNumber', dayNumber);
    for (var i=0; i<dayNumber; i++) {
      let day = {day: 'day ' + i, activities: []};
      totalNumber.push(day);
    }

    console.log('total number', totalNumber);

  }

  makeObjectArray(req.body.packingList, packingListObjectArray);
  numberOfDays(req.body.dateRange, totalDaysArray);

  let trip = new Trip(
    {
      destination: req.body.destination,
      dateRange: req.body.dateRange,
      numberOfDays: totalDaysArray,
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

  if (req.body.packingList) {
    Trip.findByIdAndUpdate(req.params.id, {$set: {'packingList': JSON.parse(req.body.packingList)}}, function(err, trip) {
      console.log(req.body.packingList);
      if (err) return next(err);
      res.send('Trip updated.');
    });
  } else if (req.body.itinerary) {
    Trip.findByIdAndUpdate(req.params.id, {$set: {'numberOfDays': JSON.parse(req.body.itinerary)}}, function(err, trip) {
      console.log(req.body.itinerary);
      if (err) return next(err);
      res.send('Trip updated.');
    });
  }

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
