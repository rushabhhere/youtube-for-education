const path = require('path');
const fs = require('fs');
const fetch = require('node-fetch');

const video_page = (request, response) => {
  const { id, type } = request.query;
  if (id && type) {
    const endpoint = 'https://youtube.googleapis.com/youtube/v3/videos';

    const key = fs.readFileSync(path.resolve('./server/api-key.txt'), 'utf-8');
    const part = 'snippet,statistics';

    const url = `${endpoint}?part=${part}&id=${id}&key=${key}`;

    fetch(url)
      .then(res => res.json())
      .then(results => {
        response.render('video', {
          video: results.items[0],
          type,
        });
      })
      .catch(err => console.error(err));
  } else {
    response.redirect('/');
  }
};

module.exports = video_page;
