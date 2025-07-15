const express = require('express');
const router = express.Router();

router.use('/api', require('./api'))

// Serve static routes and redirect to index.html

module.exports = router