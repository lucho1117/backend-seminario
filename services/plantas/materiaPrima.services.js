const {sequelize, Sequelize} = require('../../utils/mysql.config');
const materiaPrimaModel = require('../../models/materiaPrima');
const materiaPrima = materiaPrimaModel(sequelize, Sequelize);

const responsesServices = require('../../responses/responses.services');
const {generateDateNow} = require('../global.services');
//definimos el modelo


exports.findAll = async () => {
  
	let queryDetalle = `	SELECT MP.ID_MATERIA_PRIMA idMateriaPrima, MP.NOMBRE nombre, MP.DESCRIPCION descripcion,
							MP.FECHA_INGRESO fechaIngreso, MP.STOCK stock, TMP.NOMBRE tipoMateriaPrima, MP.ID_TIPO_MATERIA_PRIMA idTipoMateriaPrima
							FROM MATERIA_PRIMA MP
							INNER JOIN TIPO_MATERIA_PRIMA TMP ON TMP.ID_TIPO_MATERIA_PRIMA = MP.ID_TIPO_MATERIA_PRIMA
							WHERE MP.ACTIVO = 1
							ORDER BY MP.ID_MATERIA_PRIMA DESC`;
	return sequelize
		.query(queryDetalle, {
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

	return materiaPrima
		.create(aux)
		.then((response) => {
			return responsesServices.success(response);
		})
		.catch((error) => {
			return responsesServices.error(error.message);
		});
};

exports.update = async (obj) => {
	return materiaPrima
		.update(obj, {
			where: { idMateriaPrima: obj.idMateriaPrima },
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

	return materiaPrima
		.update(aux, { where: { idMateriaPrima: obj.idMateriaPrima } })
		.then((response) => {
			return responsesServices.success(response);
		})
		.catch((error) => {
			console.log(error.message);
			return responsesServices.error(error.message);
		});
};

