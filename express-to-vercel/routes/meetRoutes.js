const getHosts = async (req,res) => {
    const {address} = req.body;
    const userDoc = await Host.findOne({address:address});
    if(userDoc == null){
      res.status(404).json("error")}
      else {
        res.json({userDoc});
      }
  
     
  };

 const createHosts =  async (req,res) => {
    const {img,name,addr,title,type} = req.body;
    try{
      const userDoc = await Host.create({
        image:img,
        name:name,
        address:addr,
        title:title,
        type:type
      });
      res.json(userDoc);
    } catch(e) {
      console.log(e);
      res.status(400).json(e);
    }
  };

