// roundModel.js
var mongoose = require("mongoose");

// Setup schema
var roundSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  tournamentId: {
    type: mongoose.Schema.ObjectId,
    ref: "Tournament",
    required: true,
  },
});

// Export Contact model
var Round = (module.exports = mongoose.model("round", roundSchema));
module.exports.get = function (callback, limit) {
  Round.find(callback).limit(limit);
};
