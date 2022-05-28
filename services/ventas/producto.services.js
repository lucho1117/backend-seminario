const {sequelize, Sequelize} = require('../../utils/mysql.config');
const productoModel = require('../../models/producto');
const producto = productoModel(sequelize, Sequelize);

const responsesServices = require('../../responses/responses.services');
const {generateDateNow} = require('../global.services');
//definimos el modelo


exports.findAll = async () => {
	let query = `SELECT P.ID_PRODUCTO idProducto, P.NOMBRE nombre, P.DESCRIPCION descripcion, P.VENTA venta,
			P.PRECIO precio, P.STOCK stock, P.FECHA_INGRESO fechaIngreso, C.NOMBRE categoria, P.ID_CATEGORIA idCategoria, P.ID_PROVEEDOR idProveedor
			FROM PRODUCTO P
			INNER JOIN CATEGORIA C ON C.ID_CATEGORIA = P.ID_CATEGORIA
			WHERE P.ACTIVO = 1
			ORDER BY P.ID_PRODUCTO DESC
	`;
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

	return producto
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
	return producto
		.update(obj, {
			where: { idProducto: obj.idProducto },
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

	return producto
		.update(aux, { where: { idProducto: obj.idProducto } })
		.then((response) => {
			return responsesServices.success(response);
		})
		.catch((error) => {
			console.log(error.message);
			return responsesServices.error(error.message);
		});
};

