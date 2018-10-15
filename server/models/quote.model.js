const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let QuoteSchema = new Schema({
  author: {type: String},
  quote: {type: String}
});

// Export the model
module.exports = mongoose.model('Quote', QuoteSchema);
