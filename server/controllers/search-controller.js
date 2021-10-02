const path = require('path');
const fs = require('fs');
const fetch = require('node-fetch');

const search_page = (request, response) => {
  const { query } = request.query;
  if (query) {
    if (query.trim() === '') {
      response.redirect('/');
    }

    const endpoint = 'https://youtube.googleapis.com/youtube/v3/search';
    const type = 'video';
    const maxResults = 10;
    const key = fs.readFileSync(path.resolve('./server/api-key.txt'), 'utf-8');

    const url = `${endpoint}?part=snippet&q=${query}&type=${type}&maxResults=${maxResults}&key=${key}`;

    fetch(url)
      .then(res => res.json())
      .then(results => response.render('search', { query, results }))
      .catch(err => console.error(err));
  } else {
    response.redirect('/');
  }
};

module.exports = search_page;
