const express = require ('express');
const router = express.Router();

const getAllUsers = require("../Controllers/getUser");

router.route("/").get(getAllUsers);

module.exports = router;