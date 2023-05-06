const express = require('express');
const apiRouter = require('./apiRoutes'); // Import API Routes
const htmlRouter = require('./htmlRoutes'); // Import HTML routes

const router = express.Router();

router.use('/api', apiRouter);
router.use('/', htmlRouter);

module.exports = router;
