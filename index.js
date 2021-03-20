const express = require('express');
const db = require('./database');
const port = 3000;

var app = express();

app.use( express.json() );

app.get('/ratings', function (req, res) {
  const id = req.query.id;
  db.getProductRatings(id).then((response) => res.send(response)).catch((error) => console.log(error));
});

app.get('/total', function (req, res) {
  const id = req.query.id;
  db.getTotalReviews(id).then((response) => {
    res.send(response[0]);
  }).catch((error) => console.log(error));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})