const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  deleteThought,
  updateThought,
} = require('../../controllers/thoughtController');

// /api/thoughts
router.route('/').get(getThoughts);



// /api/students/:thoughtId
router.route('/:thoughtId').get(getSingleThought).get(getSingleThought);

// /api/students/:userId/newthought
router.route('/:userId/newthought').post(createThought);

// /api/students/:userId/users/:thoughtId
router.route('/:userId/user/:thoughtId').delete(deleteThought);


// /api/students/:userId/user/:thoughtId
router.route('/:userId/user/:thoughtId').put(updateThought);

module.exports = router;