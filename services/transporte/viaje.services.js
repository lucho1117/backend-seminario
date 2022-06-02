const {sequelize, Sequelize} = require('../../utils/mysql.config');
const viajeModel = require('../../models/viaje');
const viaje = viajeModel(sequelize, Sequelize);

const responsesServices = require('../../responses/responses.services');
const {generateDateNow} = require('../global.services');
//definimos el modelo


exports.findAll = async () => {
	let query = `SELECT V.ID_VIAJE idViaje, V.ID_CARGAMENTO idCargamento, V.ID_CLIENTE idCliente,
					V.ORIGEN origen, V.DESTINO destino, V.FECHA_INICIO fechaInicio, V.FECHA_FIN fechaFin,
					V.KILOMETROS kilometros, V.TONELADAS toneladas, V.PRECIO precio, C.NOMBRE cargamento,
					CL.NOMBRE cliente
				FROM VIAJE V
				INNER JOIN CARGAMENTO C ON C.ID_CARGAMENTO = V.ID_CARGAMENTO
				INNER JOIN CLIENTE CL ON CL.ID_CLIENTE = V.ID_CLIENTE
				WHERE V.ACTIVO = 1
				ORDER BY V.ID_VIAJE DESC`;
	return sequelize
		.query(query, {
			type: Sequelize.QueryTypes.SELECT,
		})
		.then((response) => {
			return responsesServices.success(response);
		})
		.catch((error) => {
			console.log(error.message);
			return responsesServices.error(error.message);
		});
}

exports.save = async (obj) => {
	const aux = {
		...obj,
		activo: 1,
		fechaCreacion: generateDateNow().toString(),
	};

	return viaje
		.create(aux)
		.then((response) => {
			return responsesServices.success(response);
		})
		.catch((error) => {
			return responsesServices.error(error.message);
		});
};

exports.update = async (obj) => {
	return viaje
		.update(obj, {
			where: { idViaje: obj.idViaje },
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

	return viaje
		.update(aux, { where: { idViaje: obj.idViaje } })
		.then((response) => {
			return responsesServices.success(response);
		})
		.catch((error) => {
			console.log(error.message);
			return responsesServices.error(error.message);
		});
};

