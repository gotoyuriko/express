var express = require('express');
var request = require('request');
var router = express.Router();
const cors = require('cors');

// cors middle wear
router.use(cors());

router.get('/', async (req, res) => {
    request('https://api.thecatapi.com/v1/images/search', function (error, response, body) {
        if (!error && response.statusCode == 200) {
            const data = JSON.parse(body);
            res.json(data);
        }
    });
})
module.exports = router;