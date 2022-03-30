const { Thought, User } = require('../models');

module.exports = {
  getThoughts(req, res) {
    Thought.find()
    .then(async (thought) => {
      return res.json(thought);
    })
    .catch((err) => {
      console.log(err);
      return res.status(500).json(err);
    });
  },


  getSingleThought(req, res) {
    Thought.findOne({ _id: req.params.videoId })
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No thoughts with that ID' })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },
  // create a new thought
  createThought(req, res) {
    Thought.create(req.body)
      .then((thought) => {
        return User.findOneAndUpdate(
          { _id: req.body.userId },
          { $addToSet: { thought: thought._id } },
          { new: true }
        );
      })
      .then((user) =>
        !user
          ? res.status(404).json({
              message: 'Thought created, but found no user with that ID',
            })
          : res.json('Created the Thought!')
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  //update Thought
  updateThought(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought with this id!' })
          : res.json(thought)
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  deleteThought(req, res) {
    Thought.findOneAndRemove({ _id: req.params.thoughtId })
      .then((video) =>
        !video
          ? res.status(404).json({ message: 'No thought with this id!' })
          : User.findOneAndUpdate(
              { thought: req.params.thoughtId },
              { $pull: { thought: req.params.thoughtId } },
              { new: true }
            )
      )
      .then((user) =>
        !user
          ? res
              .status(404)
              .json({ message: 'Thought created but no user with this id!' })
          : res.json({ message: 'Thought successfully deleted!' })
      )
      .catch((err) => res.status(500).json(err));
  },
  
 
};
