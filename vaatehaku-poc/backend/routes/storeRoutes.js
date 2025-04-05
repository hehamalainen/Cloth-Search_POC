const express = require('express');
const router = express.Router();
const { findStores } = require('../controllers/storeController');

router.get('/', findStores);

module.exports = router;