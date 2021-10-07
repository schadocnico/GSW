// tournamentController.js
// Import tournament model
Tournament = require("./tournamentModel");
// Handle index actions
exports.index = function (req, res) {
  Tournament.get(function (err, tournaments) {
    if (err) {
      res.json({
        status: "error",
        message: err,
      });
    }
    res.json({
      status: "success",
      message: "Tournaments retrieved successfully",
      data: tournaments,
    });
  });
};

// Handle create tournament actions
exports.new = function (req, res) {
  var tournament = new Tournament();
  tournament.name = req.body.name ? req.body.name : tournament.name;
  // save the tournament and check for errors
  tournament.save(function (err) {
    // if (err)
    //     res.json(err);
    res.json({
      message: "New tournament created!",
      data: tournament,
    });
  });
};

// Handle view tournament info
exports.view = function (req, res) {
  Tournament.findById(req.params.tournament_id, function (err, tournament) {
    if (err) res.send(err);
    res.json({
      message: "Tournament details loading..",
      data: tournament,
    });
  });
};
