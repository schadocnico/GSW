// Filename: api-routes.js
// Initialize express router
let router = require("express").Router();

// Set default API response
router.get("/", function (req, res) {
  res.json({
    status: "API Its Working",
    message: "Welcome to RESTHub crafted with love",
  });
});

// Import tournament controller
var tournamentController = require("./tournamentController");
var roundController = require("./roundController");

// Tournament routes
router
  .route("/tournaments")
  .get(tournamentController.index)
  .post(tournamentController.new);

router
  .route("/tournaments/:tournament_id")
  .get(tournamentController.view)
  .put(roundController.update);

// Export API routes
module.exports = router;
