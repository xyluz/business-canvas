const express = require('express');
const bodyParser = require("body-parser");

const router = express.Router();

router.use(bodyParser.json());
const controller = require('../controllers/homeController');

router.get('/', controller.getHome);

module.exports = router;