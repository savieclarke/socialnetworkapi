const User = require('../models/User');

module.exports = {
  getUsers(req, res) {
    User.find()
      .then((users) => res.json(users))
      .catch((err) => res.status(500).json(err));
  },
  getSingleUser(req, res) {
    User.findOne({ _id: req.params.userId })
      .select('-__v')
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with that ID' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
  // create a new user
  createUser(req, res) {
    User.create(req.body)
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => res.status(500).json(err));
  },
   // Update a user
   updateUser(req, res) {
    Course.findOneAndUpdate(
      { _id: req.params.userId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((course) =>
        !course
          ? res.status(404).json({ message: 'No user with this id!' })
          : res.json(User)
      )
      .catch((err) => res.status(500).json(err));
  },
  
  deleteUser(req, res) {
    Course.findOneAndDelete({ _id: req.params.userId })
      .then((course) =>
        !course
          ? res.status(404).json({ message: 'No user with that ID' })
          : User.deleteMany({ _id: { $in: User } })
      )
      .then(() => res.json({ message: 'User deleted!' }))
      .catch((err) => res.status(500).json(err));
  },


addFriend(req, res) {
  Course.findOneAndUpdate(
    { _id: req.params.userId },
    { $addToSet: {friends:req.body }},
    { runValidators: true, new: true }
  )
    .then((course) =>
      !course
        ? res.status(404).json({ message: 'No user with this id!' })
        : res.json(User)
    )
    .catch((err) => res.status(500).json(err));
},

removeFriend(req, res) {
  Course.findOneAndUpdate(
    { _id: req.params.userId },
    { $pull:{ friends:{friendsId: req.params.friendId}}},

    { runValidators: true, new: true }
  )
    .then((course) =>
      !course
        ? res.status(404).json({ message: 'No user with this id!' })
        : res.json(User)
    )
    .catch((err) => res.status(500).json(err));
  

  
  
}};

