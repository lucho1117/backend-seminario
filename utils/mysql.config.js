const Sequelize = require('sequelize');
const cfg = require('../cfg');
//Defenimos los parametros de conexion a la base de datos
module.exports.sequelize = new Sequelize(
  cfg.dbdatabase,
  cfg.dbuser,
  cfg.dbpassword,
  {
  host: cfg.dbhost,
  dialect: 'mysql'
})

module.exports.sequelize.authenticate()
  .then(() =>{
    console.log("CONEXION A LA BASE DE DATOS OK");
  })
  .catch(error =>{
    console.log(error);
  })


module.exports.Sequelize = Sequelize;
