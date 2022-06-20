const {sequelize, Sequelize} = require('../../utils/mysql.config');
const detalleProcesoModel = require('../../models/detalleProceso');
const detalleProceso = detalleProcesoModel(sequelize, Sequelize);

const responsesServices = require('../../responses/responses.services');
const {generateDateNow} = require('../global.services');
//definimos el modelo


exports.findAll = async (idProceso) => {
	let query = `SELECT DP.ID_DETALLE_PROCESO idDetalleProceso, DP.FECHA_INICIO fechaInicio, DP.FECHA_FIN fechaFin,
						DP.ID_MATERIA_PRIMA idMateriaPrima, DP.ID_MAQUINARIA idMaquinaria, DP.ID_EMPLEADO idEmpleado, DP.ID_PROCESO idProceso,
						DP.DESCRIPCION descripcion, DP.COSTO costo, MP.NOMBRE materiaPrima, M.NOMBRE maquinaria, E.NOMBRE empleado
					FROM DETALLE_PROCESO DP
					INNER JOIN MATERIA_PRIMA MP ON MP.ID_MATERIA_PRIMA = DP.ID_MATERIA_PRIMA
					INNER JOIN MAQUINARIA M ON M.ID_MAQUINARIA = DP.ID_MAQUINARIA
					INNER JOIN EMPLEADO E ON E.ID_EMPLEADO = DP.ID_EMPLEADO
					WHERE DP.ACTIVO = 1
					AND DP.ID_PROCESO = ${idProceso}
					ORDER BY DP.ID_DETALLE_PROCESO desc`;
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

exports.save = async (obj) => {
	const aux = {
		...obj,
		activo: 1,
		fechaCreacion: generateDateNow().toString(),
	};

	return detalleProceso
		.create(aux)
		.then((response) => {
			return responsesServices.success(response);
		})
		.catch((error) => {
			return responsesServices.error(error.message);
		});
};

exports.update = async (obj) => {
	return detalleProceso
		.update(obj, {
			where: { idDetalleProceso: obj.idDetalleProceso },
		})
		.then((response) => {
			return responsesServices.success(response);
		})
		.catch((error) => {
			console.log(error.message);
			return responsesServices.error(error.message);
		});
};


exports.deleteById = async (obj) => {
	let aux = {
		activo: false,
		idEliminacion: obj.idEliminacion,
		fechaEliminacion: generateDateNow().toString(),
	};

	return detalleProceso
		.update(aux, { where: { idDetalleProceso: obj.idDetalleProceso } })
		.then((response) => {
			return responsesServices.success(response);
		})
		.catch((error) => {
			console.log(error.message);
			return responsesServices.error(error.message);
		});
};

