const {sequelize, Sequelize} = require('../../utils/mysql.config');
const maquinariaModel = require('../../models/maquinaria');
const maquinaria = maquinariaModel(sequelize, Sequelize);

const responsesServices = require('../../responses/responses.services');
const {generateDateNow} = require('../global.services');
//definimos el modelo


exports.findAll = async () => {



let query =  `	SELECT M.ID_MAQUINARIA idMaquinaria, M.NOMBRE nombre, M.DESCRIPCION descripcion, TM.NOMBRE tipoMaquinaria, M.ID_TIPO_MAQUINARIA idTipoMaquinaria
						FROM MAQUINARIA M
						INNER JOIN TIPO_MAQUINARIA TM ON TM.ID_TIPO_MAQUINARIA = M.ID_TIPO_MAQUINARIA
						WHERE M.ACTIVO = 1
						ORDER BY M.ID_MAQUINARIA DESC`;
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

	return maquinaria
		.create(aux)
		.then((response) => {
			return responsesServices.success(response);
		})
		.catch((error) => {
			return responsesServices.error(error.message);
		});
};

exports.update = async (obj) => {
	return maquinaria
		.update(obj, {
			where: { idMaquinaria: obj.idMaquinaria },
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

	return maquinaria
		.update(aux, { where: { idMaquinaria: obj.idMaquinaria } })
		.then((response) => {
			return responsesServices.success(response);
		})
		.catch((error) => {
			console.log(error.message);
			return responsesServices.error(error.message);
		});
};

