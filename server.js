const express = require('express');
require('dotenv').config();

const app = express();

const router = require('./routes');

app.use('/api', router);

app.get('/', (req, res) => {
  res.send('GNews API App deployed!');
});

const errorHandler = (err, req, res, next) => {
  res.status(err.statusCode || 500);
  res.send(err);
};

app.use(errorHandler);

const PORT = process.env.PORT || 3030;
app.listen(PORT, () => {
  console.log(`Server listening to port ${PORT}...`);
});
