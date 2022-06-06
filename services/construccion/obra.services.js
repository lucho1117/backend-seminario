const {sequelize, Sequelize} = require('../../utils/mysql.config');
const obraModel = require('../../models/obra');
const obra = obraModel(sequelize, Sequelize);

const responsesServices = require('../../responses/responses.services');
const {generateDateNow} = require('../global.services');
//definimos el modelo

exports.findAll = async () => {
	let query = `
				SELECT O.ID_OBRA idObra, O.ID_TIPO_OBRA idTipoObra, O.ID_CLIENTE idCliente,
					O.NOMBRE nombre, O.DESCRIPCION descripcion, O.COSTO costo, O.FECHA_INICIO fechaInicio,
					O.FECHA_FIN fechaFin, TIO.NOMBRE tipoObra, C.NOMBRE cliente
				FROM OBRA O
				INNER JOIN TIPO_OBRA TIO ON TIO.ID_TIPO_OBRA = O.ID_TIPO_OBRA
				INNER JOIN CLIENTE C ON C.ID_CLIENTE = O.ID_CLIENTE
				WHERE O.ACTIVO = 1
				ORDER BY O.ID_OBRA DESC`  

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

	return obra
		.create(aux)
		.then((response) => {
			return responsesServices.success(response);
		})
		.catch((error) => {
			return responsesServices.error(error.message);
		});
};

exports.update = async (obj) => {
	return obra
		.update(obj, {
			where: { idObra: obj.idObra },
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

	return obra
		.update(aux, { where: { idObra: obj.idObra } })
		.then((response) => {
			return responsesServices.success(response);
		})
		.catch((error) => {
			console.log(error.message);
			return responsesServices.error(error.message);
		});
};

