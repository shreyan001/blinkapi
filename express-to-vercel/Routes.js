const express = require('express');
const router = express.Router();
const channelController = require('./routes/channelRoutes');
const Channel = require('./models/Channels');
const Stall = require('./models/Stalls');
const Host = require('./models/Hosts');
const stallController = require('./routes/stallRoutes');
const hostController = require('./routes/hostRoutes');


router.get('/api/channels', channelController.getChannels);
router.post('/api/channels', channelController.createChannels);
router.get('/api/channels/:id', channelController.getChannelHosts);

router.get('/api/stalls', stallController.getStalls);
router.post('/api/stalls', stallController.createStalls);
router.get('/api/stalls/:id', stallController.getStallUsers);
router.get('/api/stalls/modal/:id', stallController.getStallModal);
router.put('/api/stalls/:id', stallController.updateStallUsers);
router.delete('/api/stalls/:id', stallController.deleteStallUsers);


router.post('/api/hosts', hostController.getHosts);
router.post('/api/hosts/register', hostController.createHosts);
module.exports = router;