const router = require("express").Router();
const {
  getThoughts,
  getSingleThought,
  createThoughts,
  updateThoughts,
  deleteThoughts,
  addReactions,
  deleteReactions,
} = require("../../controllers/thoughtController.js");

router.route("/").get(getThoughts);

router.route("/:userId/").post(createThoughts);

router
  .route("/:id")
  .get(getSingleThought)
  .put(updateThoughts)
  .delete(deleteThoughts);

router.route("/:thoughtId/reactions").post(addReactions);

router.route("/:thoughtId/:reactionId").delete(deleteReactions);

module.exports = router;
