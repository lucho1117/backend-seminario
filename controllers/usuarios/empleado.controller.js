/************************************************************************
 * IMPORTS
 ************************************************************************/
 const mysqlConnection  = require('../../utils/mysql');

 /************************************************************************
 * CONTROLLERS
 ************************************************************************/

  exports.findAll = async (req, res) => {
    let query = `   SELECT E.ID_EMPLEADO idEmpleado, P.NOMBRE nombre, P.APELLIDO apellido, P.DPI dpi, R.NOMBRE rol
                    FROM EMPLEADO E
                    JOIN AREA_NEGOCIO AN ON AN.ID_AREA_NEGOCIO = E.ID_AREA_NEGOCIO
                    JOIN PERSONA P ON P.ID_PERSONA = E.ID_PERSONA
                    JOIN ROL R ON R.ID_ROL = E.ID_ROL
                    WHERE E.ACTIVO = 1;`;
    mysqlConnection.query(query, (err, rows) => {
        if(!err) {
            res.status(200).send({valid: true, msg: "Exitoso", data: rows});
        } else {
            res.status(400).send({valid: false, msg: err, data: []});
        }
    });  
  };

  exports.save = async (req, res) => {
    const {idPersona, idRol, idAreaNegocio, fechaIngreso, sueldo, password} = req.body;
   
    let query = `INSERT INTO EMPLEADO (ID_PERSONA, ID_ROL, ID_AREA_NEGOCIO, FECHA_INGRESO, SUELDO, PASSWORD, ACTIVO, FECHA_CREACION) 
    VALUES ('${idPersona}', '${idRol}','${idAreaNegocio}', '${fechaIngreso}', ${sueldo}, '${password}', 1, "${new Date().toISOString().split('T')[0]}");`;
    mysqlConnection.query(query, (err, rows) => {
        
        if(!err) {
            res.status(200).send({valid: true, data: rows, msg: "Elemento guardado"});
        } else {
            res.status(400).send({valid: false, data: [], msg: err});
        }
    });  
  };

  exports.update = async (req, res) => {
    const {idPersona, idRol, idAreaNegocio, fechaIngreso, sueldo, password} = req.body;
    const {idEmpleado} = req.params;
   
    let query = `UPDATE EMPLEADO SET ID_PERSONA = '${idPersona}', ID_ROL = '${idRol}', ID_AREA_NEGOCIO = '${idAreaNegocio}', FECHA_INGRESO = '${fechaIngreso}', SUELDO = '${sueldo}', PASSWORD = '${password}'
    WHERE ID_EMPLEADO = ${idEmpleado}`;
    mysqlConnection.query(query, (err, rows) => {
        
        if(!err) {
            res.status(200).send({valid: true, data: rows, msg: "Elemento actualizado"});
        } else {
            res.status(400).send({valid: false, data: [], msg: err});
        }
    });  
  };

  exports.delete = async (req, res) => {
    const {idEmpleado} = req.body;
   
    let query = `UPDATE EMPLEADO SET ACTIVO = 0
    WHERE ID_EMPLEADO = ${idEmpleado}`;
    mysqlConnection.query(query, (err, rows) => {
        
        if(!err) {
            res.status(200).send({valid: true, data: rows, msg: "Elemento eliminado"});
        } else {
            res.status(400).send({valid: false, data: [], msg: err});
        }
    });  
  };