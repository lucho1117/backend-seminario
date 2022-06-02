const {sequelize, Sequelize} = require('../../utils/mysql.config');
const clienteoModel = require('../../models/cliente');
const cliente = clienteoModel(sequelize, Sequelize);

const responsesServices = require('../../responses/responses.services');
const {generateDateNow} = require('../global.services');
//definimos el modelo


exports.findAll = async () => {
  return cliente.findAll({
      where: {
        activo: true,
      },
      order: [["idCliente", "DESC"]],
    })
    .then(response=>{
      return responsesServices.success(response);
    })
    .catch(error => {
      console.log(error);
      return responsesServices.error(error.message);
    })
}

exports.findAllByNegocio = async (obj) => {
	return cliente.findAll({
		where: {
		  activo: true,
		  idNegocio: obj.idNegocio
		},
		order: [["idCliente", "DESC"]],
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

	return cliente
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
	return cliente
		.update(obj, {
			where: { idCliente: obj.idCliente },
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

	return cliente
		.update(aux, { where: { idCliente: obj.idCliente } })
		.then((response) => {
			return responsesServices.success(response);
		})
		.catch((error) => {
			console.log(error.message);
			return responsesServices.error(error.message);
		});
};

exports.findAllCondicion = async (obj) => {
	let query = `SELECT C.ID_CLIENTE idCliente, C.ID_NEGOCIO idNegocio, C.NOMBRE nombre, C.APELLIDO apellido,
					C.DPI dpi, C.NIT nit, C.DIRECCION direccion, C.EMAIL email, C.TELEFONO telefono,
					C.ACTIVO activo, N.NOMBRE negocio
				FROM CLIENTE C
				INNER JOIN NEGOCIO N ON N.ID_NEGOCIO = C.ID_NEGOCIO
				WHERE C.ACTIVO = 1 AND N.ID_NEGOCIO IN (${obj.idPrimero},${obj.idSegundo})
				ORDER BY C.ID_CLIENTE DESC`;
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

