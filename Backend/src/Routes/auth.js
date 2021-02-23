const router = require('express').Router();
const dotenv = require('dotenv');
const axios = require('axios');
let token = null;

dotenv.config();

router.get('/login', (req, res) => {
    res.redirect(`https://github.com/login/oauth/authorize?client_id=${process.env.CLIENT_ID}?scope=repo`);
});

router.get('/oauth_callback', (req, res) => {
    const body = {
        client_id : process.env.CLIENT_ID,
        client_secret : process.env.CLIENT_SECRET,
        code : req.query.code
    }

    const opts = {headers : {accept : 'application/json'}};
    axios.post(`https://github.com/login/oauth/access_token`, body, opts)
        .then(console.log('Posted request'))
        .then(res => res.data['access_token'])
        .then(_token => {
            token = _token
            console.log('My token : ', token);
            res.json({ok : 1});
        })
        .catch(err => res.status(500).send(err));
})

router.get('/home', async (req, res) => {
    const resp = await axios.get('https://api.github.com/users/madrix01/repos')
})


module.exports = router;