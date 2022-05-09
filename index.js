const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Route connected');
});

app.listen(8080);
