const express = require('express');
const router = express.Router();

const User = require('../models/user.model');

const userController = require('../controllers/user.controller');

router.post('/signup', userController.userCreate);
router.delete('/:userId', userController.userDelete);

router.post('/login', userController.userLogin);

//Export router
module.exports = router;
