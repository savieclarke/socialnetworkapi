const { Schema, model } = require('mongoose');

// Schema to create User model
const userSchema = new Schema({
  id: Number,
  username: {
    type: String,
    unique: true,
    required: true,
    trimmed: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
    thoughts: {
      "thoughts id": thought_id,
    },
    friends: {
      "friends id": user_id,
    }
  },
      
    
  
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// Create a virtual property `friendCount` 
userSchema
  .virtual('friendCount')
  // Getter
  .get(function () {
    return this.friends.length;
 
  });

// Initialize our User model
const User = model('user', userSchema);

module.exports = User;
