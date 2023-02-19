const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const HostSchema = new Schema({
  image:{type: String,required: true},
  name: {type: String, required: true, min: 4, unique: true},
  address: {type: String, required: true},
  title: {type: String, required: true},
  type: {type: String, required: true}
  
});

const HostModel = model('Host', HostSchema);

module.exports = HostModel;