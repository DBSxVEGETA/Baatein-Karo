const express = require('express');
const router = express.Router();

const { registerUser } = require('../Controllers/userControllers');


router.route('/').post(registerUser)
// router.route('/login', authUser)


module.exports = router;