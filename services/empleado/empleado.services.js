const {sequelize, Sequelize} = require('../../utils/mysql.config');
const empleadoModel = require('../../models/empleado');
const empleado = empleadoModel(sequelize, Sequelize);

const responsesServices = require('../../responses/responses.services');
const {generateDateNow} = require('../global.services');
//definimos el modelo


exports.findAll = async () => {
  return empleado.findAll({
      where: {
        activo: true,
      },
      order: [["idEmpleado", "DESC"]],
    })
    .then(response=>{
      return responsesServices.success(response);
    })
    .catch(error => {
      console.log(error);
      return responsesServices.error(error.message);
    })
}

exports.findAllByRolArea = async (obj) => {
	return empleado.findAll({
		where: {
		  activo: true,
		  idRol: obj.idRol,
		  idAreaNegocio: obj.idAreaNegocio
		},
		order: [["idEmpleado", "DESC"]],
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

	return empleado
		.create(aux)
		.then((response) => {
			return responsesServices.success(response);
		})
		.catch((error) => {
			return responsesServices.error(error.message);
		});
};

exports.update = async (obj) => {
	return empleado
		.update(obj, {
			where: { idEmpleado: obj.idEmpleado },
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

	return empleado
		.update(aux, { where: { idEmpleado: obj.idEmpleado } })
		.then((response) => {
			return responsesServices.success(response);
		})
		.catch((error) => {
			console.log(error.message);
			return responsesServices.error(error.message);
		});
};

