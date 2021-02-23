const router = require('express').Router();
const dotenv = require('dotenv');
const axios = require('axios');
const token = require('./auth').token;

router.get('/', (req, res) => {
    res.json({token : token});
})


module.exports = router