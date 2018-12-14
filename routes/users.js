var express = require('express');
var router = express.Router();

var user_controller = require('../controllers/users');

router.post('', user_controller.user_create)


module.exports = router;