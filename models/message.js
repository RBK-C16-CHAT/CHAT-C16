import mongoose from 'mongoose';
import User from './user'

var Schema = mongoose.Schema;

var message = new Schema({
  message: {
    type: String,
  },
  since: {
    type: Date,
    default: Date.now
  },
  user:{type:String , required:true}
});

mongoose.models = {};

var Message = mongoose.model('Message', message);

export default Message;