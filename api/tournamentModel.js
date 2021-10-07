// tournamentModel.js
var mongoose = require("mongoose");

// Setup schema
var tournamentSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

// Export Contact model
var Tournament = (module.exports = mongoose.model(
  "tournament",
  tournamentSchema
));
module.exports.get = function (callback, limit) {
  Tournament.find(callback).limit(limit);
};
