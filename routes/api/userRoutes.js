const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  deleteUser,
  updateUser,
  addFriend,
  removeFriend
} = require('../../controllers/userController');

// /api/user
router.route('/user').get(getUsers).post(createUser);

// /api/user/:userId
router.route('/:userId').get(getSingleUser).get(getSingleUser);

// /api/user/:userId/newuser
router.route('/:userId/newuser').post(createUser);

// /api/user/:userId/users/:userId
router.route('/:userId/user/:userId').delete(deleteUser);


// /api/user/:userId/user/:userId
router.route('/:userId/user/:userId').put(updateUser);


router.route('/:userId/user/:userId').put(addFriend);

router.route('/:userId/user/:userId').put(removeFriend);


module.exports = router;