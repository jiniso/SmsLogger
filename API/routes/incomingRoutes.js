const express                = require('express');
const router                 = express.Router();
const IncomingController     = require('../controllers/incomingController');
const smsMessageModel        = require('../models/smsMessageModel');

const incomingController     = new IncomingController(smsMessageModel);

router.post('/', (...args) => incomingController.processMessage(...args));

module.exports = router;