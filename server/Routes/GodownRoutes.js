// backend/routes/locationRoutes.js
const express = require('express');
const router = express.Router();
const getGodowns = require('../Controllers/godownContoller');

router.route('/').get(getGodowns);

module.exports = router;
