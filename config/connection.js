const { connect, connection, mongoose } = require('mongoose');

connect('mongodb://localhost:27017/socialnetworkapi', {
  
});

module.exports = connection;