const { Schema, model, mongoose } = require('mongoose');
const mschema = mongoose.Schema;



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
    thoughts: [{
      type: Schema.Types.ObjectId,
      ref: 'Thought'
    }],
    friends: [{
      type: Schema.Types.ObjectId,
      ref: 'User'
    }],
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
    return [this.friends.length];
 
  });

// Initialize our User model
const User = model('user', userSchema);

module.exports = User;
