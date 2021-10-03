const express = require('express');
const index_page = require('./controllers/home-controller');
const search_page = require('./controllers/search-controller');

router = express.Router();

router.get('/', index_page);

router.get('/search', search_page);

module.exports = router;
