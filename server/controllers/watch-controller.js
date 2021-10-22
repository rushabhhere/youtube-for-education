const path = require('path');
const fs = require('fs');
const fetch = require('node-fetch');

const video_page = (request, response) => {
  const { id, type } = request.query;
  if (id && type) {
    const endpoint = `https://youtube.googleapis.com/youtube/v3/${type}s`;

    const key = fs.readFileSync(path.resolve('./server/api-key.txt'), 'utf-8');

    let part;

    if (type === 'video') {
      part = 'snippet,statistics';
    } else {
      part = 'snippet';
    }

    const url = `${endpoint}?part=${part}&id=${id}&key=${key}`;

    fetch(url)
      .then(res => res.json())
      .then(results => {
        if (type === 'playlist') {
          response.render('watch', {
            result: results.items[0],
            type,
          });
        } else {
          response.render('watch', {
            result: results.items[0],
            viewCount: parseInt(
              results.items[0].statistics.viewCount
            ).toLocaleString(),
            type,
          });
        }
      })
      .catch(err => console.error(err));
  } else {
    response.redirect('/');
  }
};

module.exports = video_page;
