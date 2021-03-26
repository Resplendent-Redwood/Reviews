const mysql = require('mysql');
const mysqlConfig = require('./config.js');

const connection = mysql.createConnection(mysqlConfig);

connection.connect();

const getReviewPhotos = function(reviewID) {
  return new Promise((resolve, reject) => {
    connection.query(`SELECT Photo_ID, Photo_URL FROM Reviews_Photos WHERE Review_ID=${reviewID}`, function (error, results) {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
};


const getProductRatings = function(id) {
  return new Promise((resolve, reject) => {
    connection.query(`SELECT Rating FROM Reviews WHERE Product_ID=${id}`, function (error, results) {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
};

const getProductRecommendations = function(id) {
  return new Promise((resolve, reject) => {
    connection.query(`SELECT Recommend FROM Reviews WHERE Product_ID=${id}`, function (error, results) {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
};

const getProductReviews = function(id) {
  return new Promise((resolve, reject) => {
    connection.query(`SELECT * FROM Reviews WHERE Product_ID=${id}`, function (error, results) {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
};

const getProductCharacteristics = function(id) {
  return new Promise((resolve, reject) => {
    connection.query(`SELECT Characteristics_Name, Characteristics_ID FROM Characteristics WHERE Product_ID=${id}`, function (error, results) {
      console.log('error:', error);
      console.log('results:', results);
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
};

const getCharacteristicsJoinTable = function(id) {
  return new Promise((resolve, reject) => {
    connection.query(`SELECT Characteristics.Characteristics_Name, Characteristics.Characteristics_ID, Characteristic_Reviews.Characteristic_Value FROM Characteristics INNER JOIN Characteristic_Reviews ON Characteristics.Characteristics_ID=Characteristic_Reviews.Characteristic_ID WHERE Product_ID=${id}`, function (error, results) {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
};

const getCharacterValue = function(id) {
  return new Promise((resolve, reject) => {
    connection.query(`SELECT Characteristic_Value FROM Characteristic_Reviews WHERE Characteristic_ID=${id}`, function (error, results) {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
};



module.exports.getProductRatings = getProductRatings;

module.exports.getProductReviews = getProductReviews;

module.exports.getProductRecommendations = getProductRecommendations;

module.exports.getProductCharacteristics = getProductCharacteristics;

module.exports.getCharacterValue = getCharacterValue;

module.exports.getReviewPhotos = getReviewPhotos;

module.exports.getCharacteristicsJoinTable = getCharacteristicsJoinTable;