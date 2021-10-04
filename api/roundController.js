// roundController.js
// Import round model
Round = require("./roundModel");
Tournament = require("./tournamentModel");
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
exports.update = function (req, res) {
  Tournament.findById(req.params.tournament_id, function (err, tournament) {
    let round = new Round();
    round.name = req.body.name ? req.body.name : round.name;
    round.subgroups = [];

    tournament.rounds.push(round);

    tournament.save(function (err) {
      if (err) res.json("caca");
      res.json({
        message: "Tournament Info updated",
        data: tournament,
      });
    });
  });
};
