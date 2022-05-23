const {sequelize, Sequelize} = require('../../utils/mysql.config');
const rolModel = require('../../models/rol');
const rol = rolModel(sequelize, Sequelize);

const responsesServices = require('../../responses/responses.services');
const {generateDateNow} = require('../global.services');
//definimos el modelo


exports.findAll = async () => {
  return rol.findAll({
      where: {
        activo: true,
      },
      order: [["idRol", "DESC"]],
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

	return rol
		.create(aux)
		.then((response) => {
			return responsesServices.success(response);
		})
		.catch((error) => {
			return responsesServices.error(error.message);
		});
};

exports.update = async (obj) => {
	return rol
		.update(obj, {
			where: { idRol: obj.idRol },
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

	return rol
		.update(aux, { where: { idRol: obj.idRol } })
		.then((response) => {
			return responsesServices.success(response);
		})
		.catch((error) => {
			console.log(error.message);
			return responsesServices.error(error.message);
		});
};

