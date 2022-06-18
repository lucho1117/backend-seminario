const {sequelize, Sequelize} = require('../../utils/mysql.config');
const empleadoModel = require('../../models/empleado');
const empleado = empleadoModel(sequelize, Sequelize);

const responsesServices = require('../../responses/responses.services');
const {generateDateNow} = require('../global.services');
//definimos el modelo


exports.findAll = async () => {
	const query = `
	SELECT E.ID_EMPLEADO idEmpleado, E.ID_ROL idRol, E.ID_AREA_NEGOCIO idAreaNegocio, E.NOMBRE nombre,
		E.APELLIDO apellido, E.DPI dpi, E.NIT nit, E.DIRECCION direccion, E.EMAIL email, E.FECHA_NACIMIENTO fechaNacimiento,
		E.TELEFONO telefono, E.FECHA_INGRESO fechaIngreso, E.ID_SEDE idSede, R.NOMBRE rol, AN.DESCRIPCION areaNegocio, S.DEPARTAMENTO sede, E.SUELDO sueldo
	FROM EMPLEADO E
	INNER JOIN ROL R ON R.ID_ROL = E.ID_ROL
	INNER JOIN AREA_NEGOCIO AN ON AN.ID_AREA_NEGOCIO = E.ID_AREA_NEGOCIO
	INNER JOIN SEDE S ON S.ID_SEDE = E.ID_SEDE
	WHERE E.ACTIVO = 1 
	ORDER BY E.ID_EMPLEADO DESC`;

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

exports.findByArea = async (obj) => {
	const query = `
	SELECT E.ID_EMPLEADO idEmpleado, E.ID_ROL idRol, E.ID_AREA_NEGOCIO idAreaNegocio, E.NOMBRE nombre,
		E.APELLIDO apellido, E.DPI dpi, E.NIT nit, E.DIRECCION direccion, E.EMAIL email, E.FECHA_NACIMIENTO fechaNacimiento,
		E.TELEFONO telefono, E.FECHA_INGRESO fechaIngreso, E.ID_SEDE idSede, R.NOMBRE rol, AN.DESCRIPCION areaNegocio, S.DEPARTAMENTO sede, E.SUELDO sueldo
	FROM EMPLEADO E
	INNER JOIN ROL R ON R.ID_ROL = E.ID_ROL
	INNER JOIN AREA_NEGOCIO AN ON AN.ID_AREA_NEGOCIO = E.ID_AREA_NEGOCIO
	INNER JOIN SEDE S ON S.ID_SEDE = E.ID_SEDE
	WHERE E.ACTIVO = 1 AND E.ID_AREA_NEGOCIO = ${obj.idAreaNegocio} 
	ORDER BY E.ID_EMPLEADO DESC`;

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

