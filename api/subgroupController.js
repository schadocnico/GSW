// roundController.js
// Import round model
Subgroup = require("./subgroupModel");
Round = require("./roundModel");
// Handle index actions
exports.index = function (req, res) {
  Round.get(function (err, round) {
    if (err) {
      res.json({
        status: "error",
        message: err,
      });
    }
    res.json({
      status: "success",
      message: "Round retrieved successfully",
      data: round,
    });
  });
};

// Handle create round actions
exports.new = function (req, res) {
  Round.findById(req.params.round_id, function (err, round) {
    var subgroup = new Subgroup();
    subgroup.name = req.body.name ? req.body.name : subgroup.name;
    subgroup.note = req.body.note ? req.body.note : subgroup.note;
    subgroup.roundId = round._id;

    subgroup.save(function (err) {
      if (err) res.json(err);
      res.json({
        message: "New subgroup created!",
        data: subgroup,
      });
    });
  });
};

// Handle view tournament info
exports.view = function (req, res) {
  Round.aggregate([
    {
      $lookup: {
        from: "subgroups",
        localField: "_id",
        foreignField: "roundId",
        as: "subgroups",
      },
    },
  ])
    .then((result) => {
      res.json({
        status: "success",
        message: "Round retrieved successfully",
        data: result,
      });
    })
    .catch((error) => {
      res.json({
        status: "error",
        message: error,
      });
    });
};
