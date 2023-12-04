var express = require('express');
var request = require('request');
var router = express.Router();
/**
 * GIPHY API
 * https://developers.giphy.com/docs/api/endpoint#random
 */
var url = 'https://api.giphy.com/v1/stickers/random?api_key=***';

router.get('/', async (req, res) => {
    request(url, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            const data = JSON.parse(body);
            res.json(data);
        }
    });
});

module.exports = router;
