const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let TripSchema = new Schema({
  destination: {type: String},
  arrival: {type: String},
  departure: {type: String},
  author: {type: String}
});

// Export the model
module.exports = mongoose.model('Trip', TripSchema);
