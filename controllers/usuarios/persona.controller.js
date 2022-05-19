/************************************************************************
 * IMPORTS
 ************************************************************************/
 const mysqlConnection  = require('../../utils/mysql');

 /************************************************************************
 * CONTROLLERS
 ************************************************************************/

  exports.findAll = async (req, res) => {
    let query = `SELECT * FROM PERSONA WHERE ACTIVO = 1`;
    mysqlConnection.query(query, (err, rows) => {
        if(!err) {
            res.status(200).send({valid: true, msg: "Exitoso", data: rows});
        } else {
            res.status(400).send({valid: false, msg: err, data: []});
        }
    });  
  };

  exports.save = async (req, res) => {
    const {nombre, apellido, dpi, direccion, email, fechaNacimiento, telefono, nit} = req.body;
   
    let query = `INSERT INTO PERSONA (NOMBRE, APELLIDO, DPI, DIRECCION, EMAIL, FECHA_NACIMIENTO, TELEFONO, NIT, ACTIVO, FECHA_CREACION) 
    VALUES ('${nombre}', '${apellido}', ${dpi},'${direccion}', '${email}','${fechaNacimiento}', ${telefono}, '${nit}', 1, "${new Date().toISOString().split('T')[0]}");`;
    mysqlConnection.query(query, (err, rows) => {
        
        if(!err) {
            res.status(200).send({valid: true, data: rows, msg: "Elemento guardado"});
        } else {
            res.status(400).send({valid: false, data: [], msg: err});
        }
    });  
  };

  exports.update = async (req, res) => {
    const {nombre, apellido, dpi, direccion, email, fechaNacimiento, telefono, nit} = req.body;
    const {idPersona} = req.params;
   
    let query = `UPDATE PERSONA SET NOMBRE = '${nombre}', APELLIDO = '${apellido}', DPI = ${dpi}, DIRECCION = '${direccion}', EMAIL = '${email}', NIT = '${nit}', FECHA_NACIMIENTO = '${fechaNacimiento}', TELEFONO = ${telefono}
    WHERE ID_PERSONA = ${idPersona}`;
    mysqlConnection.query(query, (err, rows) => {
        
        if(!err) {
            res.status(200).send({valid: true, data: rows, msg: "Elemento actualizado"});
        } else {
            res.status(400).send({valid: false, data: [], msg: err});
        }
    });  
  };

  exports.delete = async (req, res) => {
    const {idPersona} = req.body;
   
    let query = `UPDATE PERSONA SET ACTIVO = 0
    WHERE ID_PERSONA = ${idPersona}`;
    mysqlConnection.query(query, (err, rows) => {
        
        if(!err) {
            res.status(200).send({valid: true, data: rows, msg: "Elemento eliminado"});
        } else {
            res.status(400).send({valid: false, data: [], msg: err});
        }
    });  
  };