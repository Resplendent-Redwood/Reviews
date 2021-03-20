var mysql = require('mysql');
var mysqlConfig = require('./config.js');

var connection = mysql.createConnection(mysqlConfig);
connection.connect();

var getProductRating = function(id) {
  return new Promise((resolve, reject) => {
    connection.query(`SELECT rating FROM Reviews WHERE Product_ID=${id}`, function (error, results) {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
};

var getProductSummary = function(id) {
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

module.exports.getProductRating = getProductRating;