/************************************************************************
 * IMPORTS
 ************************************************************************/
 const mysqlConnection  = require('../../utils/mysql');

 /************************************************************************
 * CONTROLLERS
 ************************************************************************/

  exports.findAll = async (req, res) => {
    let query = `SELECT * FROM AREA WHERE ACTIVO = 1`;
    mysqlConnection.query(query, (err, rows) => {
        if(!err) {
            res.status(200).send({valid: true, msg: "Exitoso", data: rows});
        } else {
            res.status(400).send({valid: false, msg: err, data: []});
        }
    });  
  };

  exports.save = async (req, res) => {
    const {nombre, descripcion} = req.body;
   
    let query = `INSERT INTO AREA (NOMBRE, DESCRIPCION, ACTIVO, FECHA_CREACION) 
    VALUES ('${nombre}', '${descripcion}', 1, "${new Date().toISOString().split('T')[0]}");`;
    mysqlConnection.query(query, (err, rows) => {
        
        if(!err) {
            res.status(200).send({valid: true, data: rows, msg: "Elemento guardado"});
        } else {
            res.status(400).send({valid: false, data: [], msg: err});
        }
    });  
  };

  exports.update = async (req, res) => {
    const {nombre, descripcion} = req.body;
    const {idArea} = req.params;
   
    let query = `UPDATE AREA SET NOMBRE = '${nombre}', DESCRIPCION = '${descripcion}'
    WHERE ID_AREA = ${idArea}`;
    mysqlConnection.query(query, (err, rows) => {
        
        if(!err) {
            res.status(200).send({valid: true, data: rows, msg: "Elemento actualizado"});
        } else {
            res.status(400).send({valid: false, data: [], msg: err});
        }
    });  
  };

  exports.delete = async (req, res) => {
    const {idArea} = req.body;
   
    let query = `UPDATE AREA SET ACTIVO = 0
    WHERE ID_AREA = ${idArea}`;
    mysqlConnection.query(query, (err, rows) => {
        
        if(!err) {
            res.status(200).send({valid: true, data: rows, msg: "Elemento eliminado"});
        } else {
            res.status(400).send({valid: false, data: [], msg: err});
        }
    });  
  };