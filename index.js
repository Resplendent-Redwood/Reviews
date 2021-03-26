const express = require('express');
const db = require('./database');
const port = 3001;

var app = express();

app.use( express.json() );

app.get('/reviews', function (req, res) {
  const id = req.query.product_id;
  const sort = req.query.sort;
  const count = req.query.count;
  const page = req.query.page;
  let reviewsObj = {
    product: id,
    page: page,
    count: count,
    results: null,
    sort: sort
  }

  db.getProductReviews(id).then((response) => {
    reviewsObj.results = response;
    res.send(reviewsObj);
  }).catch((error) => console.log(error));
});

app.get('/reviews/meta', function (req, res) {
  const id = req.query.product_id;
  let metaDataObject = {
    product_id: id,
  };

  db.getProductRatings(id).then((response) => {
    let ratingsObj = {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0
    };
    for (let i = 0; i < response.length; i++) {
      let rating = response[i]['Rating'];
      if (!ratingsObj[rating]) {
        ratingsObj[rating] = 1;
      } else {
        ratingsObj[rating]++;
      }
    }
    metaDataObject.ratings = ratingsObj;
  }).catch((error) => console.log(error));

  db.getCharacteristicsJoinTable(id).then((response) => {
    let characteristicsObj = {};

    for (let i = 0; i < response.length; i++) {
      let characterObj = {};
      let charNumber = 1;
      let name = response[i]['Characteristics_Name'];
      let characteristicID = response[i]['Characteristics_ID'];
      let characteristicValue = response[i]['Characteristic_Value'];

      if (!characteristicsObj[name]) {
        characterObj.id = characteristicID;
        characterObj.value = characteristicValue;
        characteristicsObj[name] = characterObj;
        charNumber++;
      };
    }
    metaDataObject.characteristics = characteristicsObj;
  }).catch((error) => console.log(error));

  db.getProductRecommendations(id).then((response) => {
    let recommendedObj = {
     true: 0,
     false: 0
    };
    for (let i = 0; i < response.length; i++) {
      let recommended = response[i]['Recommend'];
      if (recommended === 1) {
        recommendedObj.true++;
      } else {
        recommendedObj.false++;
      }
    }
    metaDataObject.recommended = recommendedObj;
    res.send(metaDataObject);
  }).catch((error) => console.log(error));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})