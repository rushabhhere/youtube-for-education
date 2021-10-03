const path = require('path');
const fs = require('fs');
const fetch = require('node-fetch');
const duration = require('duration-fns');

const search_page = (request, response) => {
  const { query, type } = request.query;
  if (query) {
    if (query.trim() === '') {
      response.redirect('/');
    }

    let resultType = 'video';

    if (type === 'playlist') {
      resultType = 'playlist';
    }

    const cachedResults = JSON.parse(
      fs.readFileSync(path.resolve('./server/cached-results.json'), 'utf-8'),
    );

    if (cachedResults) {
      response.render('search', {
        query,
        results: cachedResults,
        resultType,
        duration,
        now: new Date(),
      });
    }

    // const endpoint = 'https://youtube.googleapis.com/youtube/v3/search';
    // const maxResults = 10;
    // const key = fs.readFileSync(path.resolve('./server/api-key.txt'), 'utf-8');

    // const url = `${endpoint}?part=snippet&q=${query}&type=${resultType}&maxResults=${maxResults}&key=${key}`;

    // fetch(url)
    //   .then(res => res.json())
    //   .then(results => {
    //     response.render('search', {
    //       query,
    //       results,
    //       resultType,
    //       duration,
    //       now: new Date(),
    //     });
    //   })
    //   .catch(err => console.error(err));
  } else {
    response.redirect('/');
  }
};

module.exports = search_page;
