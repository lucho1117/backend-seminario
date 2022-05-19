const mysql = require('mysql');
const cfg = require('../cfg');

const mysqlConnection = mysql.createConnection({
  host: cfg.dbhost,
  user: cfg.dbuser,
  password: cfg.dbpassword,
  database: cfg.dbdatabase,
  multipleStatements: true
});

mysqlConnection.connect(function (err) {
  if (err) {
    console.error(err);
    return;
  } else {
    console.log('db is connected');
  }
});

module.exports = mysqlConnection;
