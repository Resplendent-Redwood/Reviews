const express = require('express');
const db = require('./database');
const port = 3000;

var app = express();

app.use( express.json() );

app.get('/ratings', function (req, res) {
  const id = req.query.id;
  db.getProductRatings(id).then((response) => {
    let reviews = {};
    for (let i = 0; i < response.length; i++) {
      let rating = response[i]['Rating'];
      reviews[rating] = 1;
    }
    res.send(reviews);
  }).catch((error) => console.log(error));
});

app.get('/reviews', function (req, res) {
  const id = req.query.id;
  db.getProductReviews(id).then((response) => {
    res.send(response);
  }).catch((error) => console.log(error));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})