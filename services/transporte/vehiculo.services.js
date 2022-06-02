const {sequelize, Sequelize} = require('../../utils/mysql.config');
const vehiculoModel = require('../../models/vehiculo');
const vehiculo = vehiculoModel(sequelize, Sequelize);

const responsesServices = require('../../responses/responses.services');
const {generateDateNow} = require('../global.services');
//definimos el modelo


exports.findAll = async () => {
	let query = `SELECT V.ID_VEHICULO idVehiculo, V.PLACA placa, V.MODELO modelo, V.COLOR color, V.DESCRIPCION descripcion,
					V.MARCA marca, V.DISPONIBLE disponible, TV.NOMBRE tipoVehiculo, V.ID_TIPO_VEHICULO idTipoVehiculo
					FROM VEHICULO V
					INNER JOIN TIPO_VEHICULO TV ON TV.ID_TIPO_VEHICULO = V.ID_TIPO_VEHICULO
					WHERE V.ACTIVO= 1
				ORDER BY V.ID_VEHICULO DESC`;
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

	return vehiculo
		.create(aux)
		.then((response) => {
			return responsesServices.success(response);
		})
		.catch((error) => {
			console.log(error);
			return responsesServices.error(error.message);
		});
};

exports.update = async (obj) => {
	console.log(obj);
	return vehiculo
		.update(obj, {
			where: { idVehiculo: obj.idVehiculo },
		})
		.then((response) => {
			return responsesServices.success(response);
		})
		.catch((error) => {
			console.log(error);
			return responsesServices.error(error.message);
		});
};


exports.deleteById = async (obj) => {
	let aux = {
		activo: false,
		idEliminacion: obj.idEliminacion,
		fechaEliminacion: generateDateNow().toString(),
	};

	return vehiculo
		.update(aux, { where: { idVehiculo: obj.idVehiculo } })
		.then((response) => {
			return responsesServices.success(response);
		})
		.catch((error) => {
			console.log(error.message);
			return responsesServices.error(error.message);
		});
};

