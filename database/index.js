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

module.exports.getProductRatings = getProductRatings;

module.exports.getProductReviews = getProductReviews;