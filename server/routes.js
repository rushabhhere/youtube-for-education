const express = require('express');
const index_page = require('./controllers/home-controller');
const search_page = require('./controllers/search-controller');
const watch_page = require('./controllers/watch-controller');
const about_page = require('./controllers/about-controller');

router = express.Router();

router.get('/', index_page);

router.get('/search', search_page);

router.get('/watch', watch_page);

router.get('/about', about_page);

module.exports = router;
