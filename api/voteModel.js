// roundModel.js
var mongoose = require("mongoose");

// Setup schema
var voteSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  link: {
    type: String,
  },
  subgroupId: {
    type: mongoose.Schema.ObjectId,
    ref: "Subgroup",
    required: true,
  },
});

// Export Contact model
var Vote = (module.exports = mongoose.model("vote", voteSchema));
module.exports.get = function (callback, limit) {
  Vote.find(callback).limit(limit);
};
