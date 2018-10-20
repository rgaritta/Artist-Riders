const router = require("express").Router();
const riderController = require("../../controllers/riderController");

// Matches with "/api/books"
router.route("/")
  .get(riderController.findAll)
  .post(riderController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(riderController.findById)
  .put(riderController.update)
  .delete(riderController.remove);

module.exports = router;
