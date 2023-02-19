const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const MeetSchema = new Schema({
  meetLogo:{type: String,required: true},
  meetName: {type: String, required: true, min: 4, unique: true},
  Owner: {type: String, required: true},
  meetId:{type: String, required: true}
  
});

const MeetModel = model('Meet', MeetSchema);

module.exports = MeetModel;