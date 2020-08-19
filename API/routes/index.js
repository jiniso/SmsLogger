const express = require('express');
const routes = express.Router();
const incomingRoutes = require('./incomingRoutes');

routes.use('/incoming', incomingRoutes);

module.exports = routes;