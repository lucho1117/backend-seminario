const { errorMessages } = require('../messages/es');
/**
 * Retorna un objeto con la estructura de respuesta estandarizada de un error.
 * No incluye el atributo data, por lo que unicamente muestra un mensaje de tipo string, y un valid false
 * @msg: mensaje a mostrar, debe ser de tipo string
 *
 */
module.exports.error = (msg = "") => {
  return {
    valid: false,
    msg,
  };
};

/**
 * Retorna un objeto con la estructura de respuesta estandarizada.
 * Si no se agrega un mensaje, el mismo no se incluirá en el objeto de respuesta
 * @data: objeto de tipo json, el mismo no puede ser un ARRAY. Debe ser un objeto.
 *        Esto con el fin de poder agregar más atributos sin afectar los backends actuales.
 * @msg: mensaje a mostrar, debe ser de tipo string
 * @permision_level: devuelve el nivel de permisos para un usuario en caso existiera
 */
module.exports.success = (data = {}, msg = "", permision_level = null) => {
  return {
    valid: true,
    msg,
    data,
    ...(permision_level ? { permision_level } : {}),
  };
};

/**
 * Retorna un objeto con una estructura de respuesta de error estandarizada, dentro se encuentra un mensaje de error que
 * se determina mediante una busqueda del error en el objeto de error recibido, de no encontrarse se inserta el strgin del segundo parametro
 * @param {*} error Objeto de error Parametro que viene del catch de nuestra funcion
 * @param {*} msg Mensaje a presentar (Por defecto tiene un ERROR_TECNICO)
 */
module.exports.getErrorMessage = (error, msg = errorMessages.ERROR_TECNICO) => {
  const mess = error
    ? error.msg
      ? error.msg
      : error.message
      ? error.message
      : error.data && error.data.msg
      ? error.data.msg
      : msg
    : msg;
  return this.error(mess);
};
