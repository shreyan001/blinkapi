const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/User');
const Table = require('./models/Tables')


require('dotenv').config();


const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(express.json());

mongoose.set('strictQuery', true);
mongoose.connect(process.env.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.static('public'));
app.get('/', (req, res) => {
  res.json({
    message: '🦄🌈✨👋🌎🌍🌏✨🌈🦄'
  });
});

app.post('/api/register', async (req,res) => {
  const {img,name,addr} = req.body;
  try{
    const userDoc = await User.create({
      image:img,
      name:name,
      address:addr
    });
    res.json(userDoc);
  } catch(e) {
    console.log(e);
    res.status(400).json(e);
  }
});

app.post('/api/login', async (req,res) => {
  const {address} = req.body;
  const userDoc = await User.findOne({address:address});
  if(userDoc == null){
    res.status(404).json("error")}
    else {
      res.json({userDoc});
    }

   
});


app.get('/api/tables', async (req,res) => {
  
    const userDoc = await Table.find();
    if(userDoc == null){
      res.status(404).json("error")}
      else {
        res.json({userDoc});
      }
  
     
  });


  app.put('/api/tables/:id', async (req,res) => {
    const {addr} = req.body;
    const name = req.params['id'];
    const userDoc = await Table.findOneAndUpdate({name},
      { $addToSet : {addresses: addr}  } );
    if(userDoc == null){
      res.status(404).json("error")}
      else {
        res.json({userDoc});
      }
   });

   app.delete('/api/tables/:id', async (req,res) => {
    const {addr} = req.body;
    const name = req.params['id'];
    const userDoc = await Table.findOneAndUpdate({tableName:name},
      { $pull : {addresses: addr}  } );
    if(userDoc == null){
      res.status(404).json("error")}
      else {
        res.json({userDoc});
      }
   });





   app.get('/api/tables/:id', async (req,res) => {
    
    const name = req.params['id'];
    const userDoc = await Table.findOne({tableName:name}
     ) ;
    if(userDoc == null){
      res.status(404).json("error")}
      else {
        res.json(userDoc.addresses);
      }
     
   });

   app.post('/api/Users/1', async (req,res) => {
   
    const {addr} = req.body;
    const userDoc = await User.findOne ({addr});
    if(userDoc == null){
      res.status(404).json("error")}
      else {
      
        res.json(userDoc);
      }
  
     
  });  



  app.post('/api/users', (req, res) => {
    const addresses = req.body.addr;
  
    if (!addresses || !addresses.length) {
      return res.send([]);
    }
  
    User.find({
      $or: addresses.map(address => ({ address }))
    }, (err, users) => {
      if (err) {
        return res.send(err);
      }
  
      res.send(users);
    });
  });
  const port = process.env.PORT || 3200;
  app.listen(port, () => {
   
    /* eslint-disable no-console */
    console.log(`Listening: http://localhost:${port}`);
    /* eslint-enable no-console */
  });

  module.exports = app;
