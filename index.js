
const express = require('express');
const Sequelize = require('sequelize');
const app = express();

//Defenimos los parametros de conexion a la base de datos
const sequelize = new Sequelize('SEMINARIO','root','',{
  host: 'localhost',
  dialect: 'mysql'
})

//definimos el modelo

const areaModel = sequelize.define('NEGOCIO',{
  "ID_NEGOCIO": {type:Sequelize.INTEGER, primarykey:true},
  "NOMBRE": Sequelize.STRING,
  "DESCRIPCION": Sequelize.STRING,
  "ACTIVO": Sequelize.INTEGER,
  "FECHA_CREACION": Sequelize.STRING,
  "FECHA_ELIMINACION": Sequelize.STRING,
  "ID_ELIMINO": Sequelize.INTEGER
}, {
  sequelize,
  tableName: 'NEGOCIO',
  timestamps: false
})

sequelize.authenticate()
  .then(() =>{
    console.log("CONEXION A LA BASE DE DATOS OK");
  })
  .catch(error =>{
    console.log(error);
  })

areaModel.findAll({attributes:['NOMBRE','DESCRIPCION']})
  .then(response=>{
    const areas = JSON.stringify(response);
    console.log(areas);
  })
  .catch(error => {
    console.log(error);
  })


app.listen(3000,()=>{
  console.log("SERVER EN CORRIENDO EN PUESTO 3000");
})


/* var app = express();

const cfg = require("./cfg.js");


// Middlewares
app.use(express.json());

// Routes
app.use(require('./routes/routes'));

// Starting the server
app.listen(cfg.port, () => {
  console.log(`Server on port ${cfg.port}`);
}); */
