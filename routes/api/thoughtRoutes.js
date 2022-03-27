const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  deleteThought,
  updateThought,
} = require('../../controllers/userController');

// /api/thoughts
router.route('/').get(getThoughts).post(getThoughts);

// /api/students/:thoughtId
router.route('/:thoughtId').get(getSingleThought).get(getSingleThought);

// /api/students/:studentId/newthought
router.route('/:studentId/newthought').post(createThought);

// /api/students/:studentId/users/:thoughtId
router.route('/:studentId/user/:thoughtId').delete(deleteThought);


// /api/students/:studentId/user/:thoughtId
router.route('/:studentId/user/:thoughtId').put(updateThought);

module.exports = router;