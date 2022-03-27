const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  deleteUser,
  updateUser,
} = require('../../controllers/userController');

// /api/users
router.route('/').get(getUsers).post(getUsers);

// /api/students/:userId
router.route('/:userId').get(getSingleUser).get(getSingleUser);

// /api/students/:studentId/newuser
router.route('/:studentId/newuser').post(createUser);

// /api/students/:studentId/users/:userId
router.route('/:studentId/user/:userId').delete(deleteUser);


// /api/students/:studentId/user/:userId
router.route('/:studentId/user/:assignmentId').put(updateUser);

module.exports = router;