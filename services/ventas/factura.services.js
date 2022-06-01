const {sequelize, Sequelize} = require('../../utils/mysql.config');
const facturaModel = require('../../models/factura');
const factura = facturaModel(sequelize, Sequelize);

const detalleVemtaModel =  require('../../models/detalleVenta');
const detalleVenta = detalleVemtaModel(sequelize, Sequelize);

const responsesServices = require('../../responses/responses.services');
const {generateDateNow} = require('../global.services');
//definimos el modelo


exports.findAll = async () => {
	let finalFacturas = [];
	let query = `SELECT F.ID_FACTURA idFactura, F.ID_CLIENTE idCliente, F.ID_TIPO_PAGO idTipoPago, F.ID_EMPLEADO idEmpleado,
				F.FECHA fecha, F.DIRECCION direccion, F.TOTAL total, E.NOMBRE empleado, T.NOMBRE tipoPago, 
				C.NOMBRE cliente
			FROM FACTURA F
			INNER JOIN EMPLEADO E ON E.ID_EMPLEADO = F.ID_EMPLEADO
			INNER JOIN TIPO_PAGO T ON T.ID_TIPO_PAGO = F.ID_TIPO_PAGO
			INNER JOIN CLIENTE C ON C.ID_CLIENTE = F.ID_CLIENTE
			WHERE F.ACTIVO = 1
			ORDER BY F.ID_FACTURA DESC;`;

	let respFactura = await sequelize
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
	
	if ( respFactura.valid ) {
		for (let index = 0; index < respFactura.data.length; index++){
			
			let queryDetalle = `SELECT DV.ID_DETALLE_VENTA idDetalleVenta, DV.ID_PRODUCTO idProducto,
									DV.ID_FACTURA idFactura, DV.CANTIDAD cantidad, DV.TOTAL total,
									P.NOMBRE producto, P.PRECIO precio
								FROM DETALLE_VENTA DV
								INNER JOIN PRODUCTO P ON P.ID_PRODUCTO = DV.ID_PRODUCTO
								WHERE DV.ACTIVO = 1 AND DV.ID_FACTURA = ${respFactura.data[index].idFactura};`;
			let respDetalle = await sequelize
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
			if (respDetalle.valid) {
				finalFacturas.push({
					...respFactura.data[index],
					detalle: respDetalle.data
				});
			}
		};
		if (finalFacturas.length > 0) {
			return responsesServices.success(finalFacturas);
		} else {
			return responsesServices.error("Error al traer detalle de venta");
		}
	} else {
		return responsesServices.error("Error al traer el encabezado de la factura");
	}
}

exports.save = async (obj) => {
	const aux = {
		idCliente: obj.idCliente,
		idTipoPago: obj.idTipoPago,
		idEmpleado: obj.idEmpleado,
		fecha: obj.fecha,
		direccion: obj.direccion,
		total: obj.total,
		activo: 1,
		fechaCreacion: generateDateNow().toString(),
	};

	let respFactura = await factura
		.create(aux)
		.then((response) => {
			return responsesServices.success(response);
		})
		.catch((error) => {
			return responsesServices.error(error.message);
		});

	if (respFactura.valid) {
		let listDetalle = [];
		obj.detalle.map(item => {
			listDetalle.push({
				idFactura: respFactura.data.idFactura,
				idProducto: item.idProducto,
				cantidad: item.cantidad,
				total: item.total,
				activo: 1,
				fechaCreacion: generateDateNow().toString(),
			});
		});

		const respDetalleVenta = await detalleVenta
			.bulkCreate(listDetalle)
			.then((response) => {
				return responsesServices.success(response);
			})
			.catch((error) => {
				console.log(error);
				return responsesServices.error(error.message);
			});

		if ( respDetalleVenta.valid ) {
			return responsesServices.success("La Factura fue creada correctamente");
		} else {
			return responsesServices.error("Error al crear detalle de la factura");
		}

	} else {
		return responsesServices.error("Error al crear primero la factura");
	}
};

exports.update = async (obj) => {
	return factura
		.update(obj, {
			where: { idFactura: obj.idFactura },
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

	let respFactura = await factura
		.update(aux, { where: { idFactura: obj.idFactura } })
		.then((response) => {
			return responsesServices.success(response);
		})
		.catch((error) => {
			console.log(error.message);
			return responsesServices.error(error.message);
		});
	if ( respFactura.valid ) {
		
		let respDetalle = await detalleVenta
			.update(aux, { where: { idFactura: obj.idFactura } })
			.then((response) => {
				return responsesServices.success(response);
			})
			.catch((error) => {
				console.log(error.message);
				return responsesServices.error(error.message);
			});
		
		if (respDetalle.valid) {
			return responsesServices.success("Factura eliminada correctamente");
		} else {
			return responsesServices.error("Error al eliminar detalle de factura");
		}
		
	} else {
		return responsesServices.error("Error al eliminar la factura");
	}
};

