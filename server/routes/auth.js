const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')

const User = require('../models/User')

router.post('/signup', (req, res, next) => {
    // implement signup
})

module.exports = router;