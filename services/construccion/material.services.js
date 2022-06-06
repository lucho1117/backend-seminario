const {sequelize, Sequelize} = require('../../utils/mysql.config');
const materialModel = require('../../models/material');
const material = materialModel(sequelize, Sequelize);

const responsesServices = require('../../responses/responses.services');
const {generateDateNow} = require('../global.services');
//definimos el modelo


exports.findAll = async () => {
	let query = `SELECT M.ID_MATERIAL idMaterial, M.NOMBRE nombre, M.DESCRIPCION descripcion,
					M.PRECIO precio, M.DESCRIPCION descripcion, TM.NOMBRE tipoMaterial, M.ID_TIPO_MATERIAL idTipoMaterial
				FROM MATERIAL M
				INNER JOIN TIPO_MATERIAL TM ON TM.ID_TIPO_MATERIAL = M.ID_TIPO_MATERIAL
				WHERE M.ACTIVO = 1
				ORDER BY M.ID_MATERIAL DESC`  

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

	return material
		.create(aux)
		.then((response) => {
			return responsesServices.success(response);
		})
		.catch((error) => {
			return responsesServices.error(error.message);
		});
};

exports.update = async (obj) => {
	return material
		.update(obj, {
			where: { idMaterial: obj.idMaterial },
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

	return material
		.update(aux, { where: { idMaterial: obj.idMaterial } })
		.then((response) => {
			return responsesServices.success(response);
		})
		.catch((error) => {
			console.log(error.message);
			return responsesServices.error(error.message);
		});
};

