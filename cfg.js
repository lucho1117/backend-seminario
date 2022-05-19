const dotenv = require("dotenv");
dotenv.config({path: ".env"})

module.exports = {
 // ------------- CONSTANTES INYECTABLES --------------
  //Global variables
  host: process.env.HOST,
  port: process.env.PORT,

  //SQLServer database
  dbhost: process.env.HOST,
  dbuser: process.env.DB_USERNAME,
  dbpassword: process.env.DB_PASSWORD,
  dbdatabase: process.env.DB_DATABASE,

    

};
