const express = require('express');
const index_page = require('./controllers/home-controller');
const search_page = require('./controllers/search-controller');
const video_page = require('./controllers/video-controller');
const about_page = require('./controllers/about-controller');
const library_page = require('./controllers/library-controller');

router = express.Router();

router.get('/', index_page);

router.get('/search', search_page);

router.get('/watch', video_page);

router.get('/about', about_page);

router.get('/library', library_page);

module.exports = router;
