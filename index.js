const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Route connected');
  console.log("hello");
});

app.listen(8080);
