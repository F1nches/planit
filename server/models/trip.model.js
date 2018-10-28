const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let TripSchema = new Schema({
  destination: {type: String},
  dateRange: {type: String},
  numberOfDays: {type: Array},
  packingList: {type: Array},
  author: {type: String},
  tripImage: {type: String},
  tripColor: {type: String}
});

// Export the model
module.exports = mongoose.model('Trip', TripSchema);
