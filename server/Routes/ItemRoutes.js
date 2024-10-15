// backend/routes/itemRoutes.js
const express = require('express');
const router = express.Router();
const { getItemDetails } = require('../Controllers/itemController');

router.get('/', getItemDetails);

module.exports = router;
