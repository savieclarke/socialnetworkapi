const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  deleteThought,
  updateThought,
  deletethoughtReaction,
  addthoughtReaction
} = require('../../controllers/thoughtController');

// /api/thoughts
router.route('/').get(getThoughts);



// /api/user/:thoughtId
router.route('/:thoughtId').get(getSingleThought).get(getSingleThought);

// /api/students/:userId/newthought
router.route('/:userId/newthought').post(createThought);

// /api/students/:userId/users/:thoughtId
router.route('/:userId/user/:thoughtId').delete(deleteThought);


// /api/students/:userId/user/:thoughtId
router.route('/:userId/user/:thoughtId').put(updateThought);

router.route('/:userId/user/:thoughtId').delete(deletethoughtReaction);

router.route('/:userId/newthought').post(addthoughtReaction);


module.exports = router;