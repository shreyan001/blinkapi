const Channel = require('../models/Channels');



 const getChannels = async (req,res) => {
  
    const userDoc = await Channel.find();
    if(userDoc == null){
      res.status(404).json("error")}
      else {
        res.json({userDoc});
      }
  };

 const createChannels =  async (req,res) => {
    const {name,topic} = req.body;
    try{
      const userDoc = await Channel.create({
        topicName:topic,
        channelName:name,
        addresses:[],
        host:[]
      });
      res.json(userDoc);
    } catch(e) {
      console.log(e);
      res.status(400).json(e);
    }
  };

  const getChannelHosts =  async (req,res) => {
    
    const name = req.params['id'];
    const userDoc = await Channel.findOne({ChannelName:name}
     ) ;
    if(userDoc == null){
      res.status(404).json("error")}
      else {
        res.json(userDoc.host);
      }
     
   };


//  Create  = app.post('/api/s', async (req,res) => {
  
//     const userDoc = await .find();
//     if(userDoc == null){
//       res.status(404).json("error")}
//       else {
//         res.json({userDoc});
//       }
  
     
//   });


module.exports = {getChannels, createChannels,getChannelHosts};  