import express from 'express';
const router = express.Router();

router.use('/api', require('./api'))

// Serve static routes and redirect to index.html

