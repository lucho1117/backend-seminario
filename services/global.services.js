/************************************************************************
 * IMPORTS
 ************************************************************************/
 const moment = require("moment");
 const {sequelize, Sequelize} = require('../utils/mysql.config');

 const responsesServices = require('../responses/responses.services');
/************************************************************************
* SERVICES
************************************************************************/

module.exports.generateDateNow = (format = "YYYY-MM-DD HH:mm:ss") =>
  moment(new Date(), "MM-DD-YYYY HH:mm:ss").local().format(format);


exports.totalEmpleadosArea = async () => {
    let query = `SELECT COUNT(E.ID_EMPLEADO) as numeroEmpleados, AN.DESCRIPCION area 
                FROM EMPLEADO E 
                INNER JOIN AREA_NEGOCIO AN ON AN.ID_AREA_NEGOCIO = E.ID_AREA_NEGOCIO 
                WHERE E.ACTIVO = 1 
                GROUP BY AN.DESCRIPCION`;

    return sequelize
      .query(query, {
        type: Sequelize.QueryTypes.SELECT,
      })
      .then((response) => {
        return responsesServices.success(response);
      })
      .catch((error) => {
        console.log(error);
        return responsesServices.error(error.message);
      });
}

exports.productosMasVendidos = async () => {
  let query = `SELECT P.ID_PRODUCTO idProducto, P.NOMBRE producto, SUM(DV.CANTIDAD) as total FROM PRODUCTO P INNER JOIN DETALLE_VENTA DV ON DV.ID_PRODUCTO = P.ID_PRODUCTO WHERE DV.ACTIVO = 1 GROUP BY P.ID_PRODUCTO`;

  return sequelize
    .query(query, {
      type: Sequelize.QueryTypes.SELECT,
    })
    .then((response) => {
      return responsesServices.success(response);
    })
    .catch((error) => {
      console.log(error);
      return responsesServices.error(error.message);
    });
}

exports.productosMasAlquilados = async () => {
  let query = `SELECT P.ID_PRODUCTO idProducto, P.NOMBRE producto, SUM(DA.CANTIDAD) as total 
              FROM PRODUCTO P 
              INNER JOIN DETALLE_ALQUILER DA ON DA.ID_PRODUCTO = P.ID_PRODUCTO 
              WHERE DA.ACTIVO = 1 GROUP BY P.ID_PRODUCTO`;

  return sequelize
    .query(query, {
      type: Sequelize.QueryTypes.SELECT,
    })
    .then((response) => {
      return responsesServices.success(response);
    })
    .catch((error) => {
      console.log(error);
      return responsesServices.error(error.message);
    });
}