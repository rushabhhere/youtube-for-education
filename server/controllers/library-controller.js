const path = require('path');

const library_page = (request, response) => {
  response.sendFile(path.resolve('./public/library.html'));
};

module.exports = library_page;
