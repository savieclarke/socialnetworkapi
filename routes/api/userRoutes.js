const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  deleteUser,
  updateUser,
} = require('../../controllers/userController');

// /api/users
router.route('/user').get(getUsers).post(createUser);

// /api/students/:userId
router.route('/:userId').get(getSingleUser).get(getSingleUser);

// /api/students/:userId/newuser
router.route('/:userId/newuser').post(createUser);

// /api/students/:userId/users/:userId
router.route('/:userId/user/:userId').delete(deleteUser);


// /api/students/:userId/user/:userId
router.route('/:userId/user/:assignmentId').put(updateUser);

module.exports = router;