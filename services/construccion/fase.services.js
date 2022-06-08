const {sequelize, Sequelize} = require('../../utils/mysql.config');
const faseModel = require('../../models/fase');
const fase = faseModel(sequelize, Sequelize);

const detalleMaterialModel = require("../../models/detalleMaterial");
const detalleMaterial = detalleMaterialModel(sequelize, Sequelize);

const detalleManoObraModel = require("../../models/manoObra");
const manoObra = detalleManoObraModel(sequelize, Sequelize);

const responsesServices = require('../../responses/responses.services');
const {generateDateNow} = require('../global.services');


//definimos el modelo


exports.findAll = async () => {
  return fase.findAll({
      where: {
        activo: true,
      },
      order: [["idFase", "DESC"]],
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
		idObra: obj.idObra,
		nombre: obj.nombre,
		descripcion: obj.descripcion,
		fechaInicio: obj.fechaInicio,
		fechaFin: obj.fechaFin,
		costoMaterial: obj.costoMaterial,
		costoManoObra: obj.costoManoObra,
		costoTotal: obj.costoTotal,
		activo: 1,
		fechaCreacion: generateDateNow().toString(),
	};

	const respFase = await fase
		.create(aux)
		.then((response) => {
			return responsesServices.success(response);
		})
		.catch((error) => {
			return responsesServices.error(error.message);
		});

	if (respFase.valid) {
		let listMaterial = [];
		obj.materiales.map(item => {
			listMaterial.push({
				idFase: respFase.data.idFase,
				idMaterial: item.idMaterial,
				cantidad: item.cantidad,
				precioTotal: item.precioTotal,
				activo: 1,
				fechaCreacion: generateDateNow().toString(),
			});
		});

		const respMaterial = await detalleMaterial
			.bulkCreate(listMaterial)
			.then((response) => {
				return responsesServices.success(response);
			})
			.catch((error) => {
				console.log(error);
				return responsesServices.error(error.message);
			});

		if ( respMaterial.valid ) {
			let listManoObra = [];
			obj.manoObra.map(item => {
				listManoObra.push({
					idFase: respFase.data.idFase,
					idEmpleado: item.idEmpleado,
					costo: item.costo,
					activo: 1,
					fechaCreacion: generateDateNow().toString(),
				});
			});

			const respManoObra = await manoObra
				.bulkCreate(listManoObra)
				.then((response) => {
					return responsesServices.success(response);
				})
				.catch((error) => {
					console.log(error);
					return responsesServices.error(error.message);
				});
			if (respManoObra.valid) {
				return responsesServices.success("La fase fue creada correctamente");
			} else {
				return responsesServices.error("Error al crear mano de obra");
			}
		} else {
			return responsesServices.error("Error al crear detalle de materiales");
		}

	} else {
		return responsesServices.error("Error al crear la fase");
	}
};

exports.update = async (obj) => {
	return fase
		.update(obj, {
			where: { idFase: obj.idFase },
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

	return fase
		.update(aux, { where: { idFase: obj.idFase } })
		.then((response) => {
			return responsesServices.success(response);
		})
		.catch((error) => {
			console.log(error.message);
			return responsesServices.error(error.message);
		});
};

exports.findAllByObra = async (obj) => {

	let materiales = [];
	let  finalData = [];

	let query = `SELECT ID_FASE idFase, NOMBRE nombre, DESCRIPCION descripcion,
				FECHA_INICIO fechaInicio, FECHA_FIN fechaFin, COSTO_MATERIAL costoMaterial, ID_OBRA idObra, 
				COSTO_MANO_OBRA costoManoObra, COSTO_TOTAL costoTotal
				FROM FASE 
				WHERE ACTIVO = 1 AND ID_OBRA = ${obj.idObra} 
				 ORDER BY ID_FASE DESC`;
	
	const resp = await sequelize
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
	
	
	if ( resp.valid) {
		for (let index = 0; index < resp.data.length; index++){
			
			let queryDetalle = `
									SELECT DM.ID_DETALLE_MATERIAL idDetalleMaterial, DM.ID_FASE idFase, DM.ID_MATERIAL idMaterial,
										CANTIDAD cantidad, DM.PRECIO_TOTAL precioTotal, F.NOMBRE fase, M.NOMBRE material, M.PRECIO precioMaterial
									FROM DETALLE_MATERIAL DM
									INNER JOIN FASE F ON F.ID_FASE = DM.ID_FASE
									INNER JOIN MATERIAL M ON M.ID_MATERIAL = DM.ID_MATERIAL
									WHERE DM.ACTIVO = 1 AND DM.ID_FASE = ${resp.data[index].idFase}
									ORDER BY DM.ID_DETALLE_MATERIAL DESC`;
			let respMaterial = await sequelize
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
			if (respMaterial.valid) {
				materiales.push({
					...resp.data[index],
					materiales: respMaterial.data
				});
			}
		};
		
		if ( materiales.length > 0) {
			for (let index = 0; index < materiales.length; index++){
			
				let queryManoObra = `
										SELECT MO.ID_MANO_OBRA idManoObra, MO.ID_FASE idFase, MO.ID_EMPLEADO idEmpleado,
											MO.DESCRIPCION descripcion, MO.COSTO costo, E.NOMBRE nombreEmpleado, E.APELLIDO apellidoEmpleado,
											F.NOMBRE fase
										FROM MANO_OBRA MO
										INNER JOIN EMPLEADO E ON E.ID_EMPLEADO = MO.ID_EMPLEADO
										INNER JOIN FASE F ON F.ID_FASE = MO.ID_FASE
										WHERE MO.ACTIVO = 1 AND MO.ID_FASE = ${materiales[index].idFase}
										ORDER BY MO.ID_MANO_OBRA DESC;`;

				let respManoObra = await sequelize
					.query(queryManoObra, {
						type: Sequelize.QueryTypes.SELECT,
					})
					.then((response) => {
						return responsesServices.success(response);
					})
					.catch((error) => {
						console.log(error.message);
						return responsesServices.error(error.message);
					});
				if (respManoObra.valid) {
					finalData.push({
						...materiales[index],
						manoObra: respManoObra.data
					});
				}
			};

			if (finalData.length > 0) {
				return responsesServices.success(finalData);
			} else {
				return responsesServices.error("Error al traer las manos de obra de la fase");
			}

		} else {
			return responsesServices.error("Error al traer los materiales de la fase");
		}

	} else {
		return responsesServices.error("Error al traer el encabezado de la  fase");
	}
  }

