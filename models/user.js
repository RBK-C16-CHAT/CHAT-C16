import mongoose from 'mongoose';
var Schema = mongoose.Schema;

var user = new Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique:true
  },
  photo:{
    type: String,
  },
  since: {
    type: Date,
    default: Date.now
  }
});

mongoose.models = {};

var User = mongoose.model('User', user);

export default User;