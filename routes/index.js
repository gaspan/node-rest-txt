var express = require('express');
var router = express.Router();
const users = require('./users');
const auth = require('../middleware/auth');

var image_controller = require('../controllers/images');
var user_controller = require('../controllers/users');

router.get('/users', user_controller.user_get_all)
router.get('/users/:nama', user_controller.user_get_by_name)
router.get('/image',image_controller.get_image);

router.use('/users',auth.isAuth,users);

module.exports = router;