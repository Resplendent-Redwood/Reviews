const express = require('express');
const db = require('./database');
const port = 3000;

var app = express();

app.use( express.json() );

app.get('/reviews', function (req, res) {
  db.getProductRating().then((response) => res.send(response)).catch((error) => console.log(error));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})