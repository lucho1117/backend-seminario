const {sequelize, Sequelize} = require('../../utils/mysql.config');
const detalleExtraccionModel = require('../../models/detalleExtraccion');
const detalleExtraccion = detalleExtraccionModel(sequelize, Sequelize);

const responsesServices = require('../../responses/responses.services');
const {generateDateNow} = require('../global.services');
//definimos el modelo


exports.findAll = async () => {
  return detalleExtraccion.findAll({
      where: {
        activo: true,
      },
      order: [["idDetalleExtraccion", "DESC"]],
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

	return detalleExtraccion
		.create(aux)
		.then((response) => {
			return responsesServices.success(response);
		})
		.catch((error) => {
			return responsesServices.error(error.message);
		});
};

exports.update = async (obj) => {
	return detalleExtraccion
		.update(obj, {
			where: { idDetalleExtraccion: obj.idDetalleExtraccion },
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

	return detalleExtraccion
		.update(aux, { where: { idDetalleExtraccion: obj.idDetalleExtraccion } })
		.then((response) => {
			return responsesServices.success(response);
		})
		.catch((error) => {
			console.log(error.message);
			return responsesServices.error(error.message);
		});
};

