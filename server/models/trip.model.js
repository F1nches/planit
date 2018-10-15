const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let TripSchema = new Schema({
  destination: {type: String},
  dateRange: {type: String},
  packingList: {type: String},
  author: {type: String}
});

// Export the model
module.exports = mongoose.model('Trip', TripSchema);
