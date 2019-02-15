const express = require('express');
const router = express.Router();

// Require the controllers
const user_controller = require('../controllers/user.controller');


 // create a new user
 router.post('/user/create', user_controller.user_create);

// read an existing user
router.get('/user/:id', user_controller.user_details);

// read all users
router.get('/users', user_controller.user_all);

// update user
router.put('/user/:id/update', user_controller.user_update);

module.exports = router;