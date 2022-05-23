const {sequelize, Sequelize} = require('../../utils/mysql.config');
const tipoMaquinariaModel = require('../../models/tipoMaquinaria');
const tipoMaquinaria = tipoMaquinariaModel(sequelize, Sequelize);

const responsesServices = require('../../responses/responses.services');
const {generateDateNow} = require('../global.services');
//definimos el modelo


exports.findAll = async () => {
  return tipoMaquinaria.findAll({
      where: {
        activo: true,
      },
      order: [["idTipoMaquinaria", "DESC"]],
    })
    .then(response=>{
      return responsesServices.success(response);
    })
    .catch(error => {
      console.log(error);
      return responsesServices.error(error.message);
    })
}

exports.save = async (obj) => {
	const aux = {
		...obj,
		activo: 1,
		fechaCreacion: generateDateNow().toString(),
	};

	return tipoMaquinaria
		.create(aux)
		.then((response) => {
			return responsesServices.success(response);
		})
		.catch((error) => {
			return responsesServices.error(error.message);
		});
};

exports.update = async (obj) => {
	return tipoMaquinaria
		.update(obj, {
			where: { idTipoMaquinaria: obj.idTipoMaquinaria },
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

	return tipoMaquinaria
		.update(aux, { where: { idTipoMaquinaria: obj.idTipoMaquinaria } })
		.then((response) => {
			return responsesServices.success(response);
		})
		.catch((error) => {
			console.log(error.message);
			return responsesServices.error(error.message);
		});
};

