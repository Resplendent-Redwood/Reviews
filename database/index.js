const mysql = require('mysql');
const mysqlConfig = require('./config.js');

const connection = mysql.createConnection(mysqlConfig);

connection.connect();

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

const getTotalReviews = function(Product_ID) {
  return new Promise((resolve, reject) => {
    connection.query(`SELECT MIN(Review_ID), MAX(Review_ID) FROM Reviews WHERE Product_ID=${Product_ID}`, function (error, results) {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
};

module.exports.getProductRatings = getProductRatings;

module.exports.getTotalReviews = getTotalReviews;