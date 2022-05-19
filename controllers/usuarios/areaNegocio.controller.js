/************************************************************************
 * IMPORTS
 ************************************************************************/
 const mysqlConnection  = require('../../utils/mysql');

 /************************************************************************
 * CONTROLLERS
 ************************************************************************/

  exports.findAll = async (req, res) => {
    let query = `   SELECT AN.ID_AREA_NEGOCIO idAreaNegocio, A.NOMBRE area, N.NOMBRE negocio 
                    FROM AREA_NEGOCIO AN 
                    JOIN AREA A ON A.ID_AREA = AN.ID_AREA
                    JOIN NEGOCIO N ON N.ID_NEGOCIO = AN.ID_NEGOCIO
                    WHERE AN.ACTIVO = 1;`;
    mysqlConnection.query(query, (err, rows) => {
        if(!err) {
            res.status(200).send({valid: true, msg: "Exitoso", data: rows});
        } else {
            res.status(400).send({valid: false, msg: err, data: []});
        }
    });  
  };

  exports.save = async (req, res) => {
    const {idArea, idNegocio} = req.body;
   
    let query = `INSERT INTO AREA_NEGOCIO (ID_AREA, ID_NEGOCIO, ACTIVO, FECHA_CREACION) 
    VALUES ('${idArea}', '${idNegocio}', 1, "${new Date().toISOString().split('T')[0]}");`;
    mysqlConnection.query(query, (err, rows) => {
        
        if(!err) {
            res.status(200).send({valid: true, data: rows, msg: "Elemento guardado"});
        } else {
            res.status(400).send({valid: false, data: [], msg: err});
        }
    });  
  };

  exports.update = async (req, res) => {
    const {idArea, idNegocio} = req.body;
    const {idAreaNegocio} = req.params;
   
    let query = `UPDATE AREA_NEGOCIO SET ID_AREA = '${idArea}', ID_NEGOCIO = '${idNegocio}'
    WHERE ID_AREA_NEGOCIO = ${idAreaNegocio}`;
    mysqlConnection.query(query, (err, rows) => {
        
        if(!err) {
            res.status(200).send({valid: true, data: rows, msg: "Elemento actualizado"});
        } else {
            res.status(400).send({valid: false, data: [], msg: err});
        }
    });  
  };

  exports.delete = async (req, res) => {
    const {idAreaNegocio} = req.body;
   
    let query = `UPDATE AREA_NEGOCIO SET ACTIVO = 0
    WHERE ID_AREA_NEGOCIO = ${idAreaNegocio}`;
    mysqlConnection.query(query, (err, rows) => {
        
        if(!err) {
            res.status(200).send({valid: true, data: rows, msg: "Elemento eliminado"});
        } else {
            res.status(400).send({valid: false, data: [], msg: err});
        }
    });  
  };