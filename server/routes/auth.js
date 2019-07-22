const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')

const User = require('../models/User')

router.post('/signup', (req, res, next) => {
    const { username, password } = req.body;

    if (!password || !username) {
        return res.status(400).json({ message: "Both fields are required" });
    } else if (password.length < 8) {
        return res.status(400).json({ message: "Password needs to be 8 char. min" });
    }

    User.findOne({ username: username }).then(user => {
        if (user) {
            return res.status(409).json({ message: "Username is already taken" })
        }

        const salt = bcrypt.genSaltSync();
        const hash = bcrypt.hashSync(password, salt);

        User.create({ 
            username,
            password: hash
         }).then(newUser => {
             req.login(newUser, (err) => {
                 if (err) {
                     return res.json({ message: "Error while attempting to login" })
                 }

                res.status(200).json(newUser);
             })
         })

    })

})

module.exports = router;