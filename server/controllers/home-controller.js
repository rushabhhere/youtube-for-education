const path = require('path');

const index_page = (request, response) => {
  response.sendFile(path.resolve('./public/index.html'));
};

module.exports = index_page;
