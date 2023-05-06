const express = require('express');

// Import our modular router for apiRoutes
const apiRouter = require('./apiRoutes');

const app = express();

app.use('/notes', apiRouter)

module.exports = app;