const {sequelize, Sequelize} = require('../../utils/mysql.config');
const asignacionModel = require('../../models/asignacion');
const asignacion = asignacionModel(sequelize, Sequelize);

const responsesServices = require('../../responses/responses.services');
const {generateDateNow} = require('../global.services');

const ServiceViaje = require('../transporte/viaje.services');
const ServiceVehiculo = require('../transporte/vehiculo.services');
//definimos el modelo


exports.findAll = async () => {
	let query = `SELECT A.ID_ASIGNACION idAsignacion, A.ID_VEHICULO idVehiculo, 
					A.ID_VIAJE idViaje, A.ID_EMPLEADO idEmpleado, A.ESTADO estado, 
					VE.PLACA placa, VI.ORIGEN origen, VI.DESTINO destino, 
					VI.PRECIO precio, C.NOMBRE cliente, CA.NOMBRE cargamento, E.NOMBRE empleado
				FROM ASIGNACION A 
				INNER JOIN VEHICULO VE ON VE.ID_VEHICULO = A.ID_VEHICULO 
				INNER JOIN VIAJE VI ON VI.ID_VIAJE = A.ID_VIAJE 
				INNER JOIN EMPLEADO E ON E.ID_EMPLEADO = A.ID_EMPLEADO 
				INNER JOIN CLIENTE C ON C.ID_CLIENTE = VI.ID_CLIENTE 
				INNER JOIN CARGAMENTO CA ON CA.ID_CARGAMENTO = VI.ID_CARGAMENTO 
				WHERE A.ACTIVO = 1 
				ORDER BY A.ID_ASIGNACION DESC`;
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
		estado: 1,
		fechaCreacion: generateDateNow().toString(),
	};

	let respAsignacion = await asignacion
		.create(aux)
		.then((response) => {
			return responsesServices.success(response);
		})
		.catch((error) => {
			console.log(error);
			return responsesServices.error(error.message);
		});

	if (respAsignacion.valid) {
		let aux = {idViaje: obj.idViaje, estado: 2 }
		let respViaje = await ServiceViaje.update(aux);

		if (respViaje.valid) {
			let aux = {idVehiculo: obj.idVehiculo, disponible: 0}
			let respVehiculo = await ServiceVehiculo.update(aux);

			if (respVehiculo.valid) {
				return responsesServices.success("La asignación fue creada correctamente");
			} else {
				return responsesServices.error("Hubo problema al actualizar el vehiculo");
			}
		} else {
			return responsesServices.error("Hubo problema al actualizar el viaje");
		}
	} else {
		return responsesServices.error("Hubo un problema al crear la asignacion");
	}
};

exports.update = async (obj) => {
	return asignacion
		.update(obj, {
			where: { idAsignacion: obj.idAsignacion },
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

	let respAsignacion = await asignacion
		.update(aux, { where: { idAsignacion: obj.idAsignacion } })
		.then((response) => {
			return responsesServices.success(response);
		})
		.catch((error) => {
			console.log(error.message);
			return responsesServices.error(error.message);
		});

	if (respAsignacion.valid) {
		let aux = {idViaje: obj.idViaje, estado: 1 }
		let respViaje = await ServiceViaje.update(aux);

		if (respViaje.valid) {
			let aux = {idVehiculo: obj.idVehiculo, disponible: 1}
			let respVehiculo = await ServiceVehiculo.update(aux);

			if (respVehiculo.valid) {
				return responsesServices.success("La asignación fue eliminada correctamente");
			} else {
				return responsesServices.error("Hubo problema al eliminar el vehiculo");
			}
		} else {
			return responsesServices.error("Hubo problema al eliminar el viaje");
		}
	} else {
		return responsesServices.error("Hubo un problema al eliminar la asignacion");
	}
		
};

exports.empezarRuta = async (obj) => {
	let aux = {
		estado: 2
	}
	return asignacion
		.update(aux, {
			where: { idAsignacion: obj.idAsignacion },
		})
		.then((response) => {
			return responsesServices.success(response);
		})
		.catch((error) => {
			console.log(error);
			return responsesServices.error(error.message);
		});
};

exports.terminarRuta = async (obj) => {
	let aux = {
		estado: 3
	}
	let respAsignacion = await asignacion
		.update(aux, {
			where: { idAsignacion: obj.idAsignacion },
		})
		.then((response) => {
			return responsesServices.success(response);
		})
		.catch((error) => {
			console.log(error);
			return responsesServices.error(error.message);
		});

	if (respAsignacion.valid) {
		let aux = {idViaje: obj.idViaje, estado: 3 }
		let respViaje = await ServiceViaje.update(aux);

		if (respViaje.valid) {
			let aux = {idVehiculo: obj.idVehiculo, disponible: 1}
			let respVehiculo = await ServiceVehiculo.update(aux);

			if (respVehiculo.valid) {
				return responsesServices.success("La asignación fue terminada correctamente");
			} else {
				return responsesServices.error("Hubo problema al actualizar el vehiculo");
			}
		} else {
			return responsesServices.error("Hubo problema al actualizar el viaje");
		}
	} else {
		return responsesServices.error("Hubo un problema al actualizar la asignacion");
	}
};

