const express = require('express');
const router = express.Router();
const { checkInventory } = require('../controllers/inventoryController');

router.get('/check', checkInventory);

module.exports = router;