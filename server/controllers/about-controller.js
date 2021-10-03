const path = require('path');

const about_page = (request, response) => {
  response.sendFile(path.resolve('./public/about.html'));
};

module.exports = about_page;
