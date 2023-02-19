const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const UserSchema = new Schema({
  image:{type: String,required: true},
  name: {type: String, required: true, min: 4, unique: true},
  address: {type: String, required: true}
  
});

const UserModel = model('User', UserSchema);

module.exports = UserModel;