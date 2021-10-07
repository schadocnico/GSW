// roundModel.js
var mongoose = require("mongoose");

// Setup schema
var subgroupSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  note: {
    type: String,
  },
  roundId: {
    type: mongoose.Schema.ObjectId,
    ref: "Round",
    required: true,
  },
});

// Export Contact model
var Subgroup = (module.exports = mongoose.model("subgroup", subgroupSchema));
module.exports.get = function (callback, limit) {
  Subgroup.find(callback).limit(limit);
};
