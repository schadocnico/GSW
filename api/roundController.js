// roundController.js
// Import round model
Round = require("./roundModel");
Tournament = require("./tournamentModel");
// Handle index actions
exports.index = function (req, res) {
  Round.get(function (err, rounds) {
    if (err) {
      res.json({
        status: "error",
        message: err,
      });
    }
    res.json({
      status: "success",
      message: "Round retrieved successfully",
      data: rounds,
    });
  });
};

// Handle create round actions
exports.new = function (req, res) {
  Tournament.findById(req.params.tournament_id, function (err, tournament) {
    var round = new Round();
    round.name = req.body.name ? req.body.name : round.name;
    round.tournamentId = tournament._id;

    round.save(function (err) {
      if (err) res.json(err);
      res.json({
        message: "New round created!",
        data: round,
      });
    });
  });
};

// Handle view tournament info
exports.view = function (req, res) {
  Tournament.aggregate([
    {
      $lookup: {
        from: "rounds",
        localField: "_id",
        foreignField: "tournamentId",
        as: "rounds",
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
