const express = require('express');
const morgan = require('morgan');
const routes = require('./routes');
const path = require('path');

const app = express();
const PORT = 4321;

app.use(express.static('public'));
app.use(express.urlencoded());

app.use(morgan('dev'));

app.set('view engine', 'ejs');
app.set('views', path.resolve('./public'));

app.use(routes);

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
