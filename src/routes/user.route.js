const express = require('express');
const router = express.Router();

// Require the controllers
const user_controller = require('../controllers/user.controller');


 // create a new user
 router.post('/user/create', user_controller.user_create);


 //get a new user ....etc
module.exports = router;