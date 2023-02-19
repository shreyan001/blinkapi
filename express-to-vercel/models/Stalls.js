const mongoose = require('mongoose');
const {Schema, model} = mongoose;


const StallSchema = new Schema({
   titleName : {type: String,required: true},
   stallName:{type: String,required: true},
   addresses: [String],
   host: [String],
   stallModal: {
    title: {type:String,required:true},
     logoImage: {type:String,required:true},
     description:{type:String,required:true},
     website:{type:String,required:true},
     workshopEmbed:{type:String,required:true},
     twitter:{type:String,required:true},
     discord:{type:String,required:true},
     github:{type:String,required:true},
     mintNFT:{type:String,required:true}
 }
 
});

const StallModel = model('Stall', StallSchema);

module.exports = StallModel;