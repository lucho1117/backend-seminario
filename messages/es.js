module.exports.errorMessages = {
  ERROR_FINDALL: "Error al listar elementos",
  ERROR_FIND: "Error al buscar elemento",
  ERROR_ADD: "Error al agregar elemento",
  ERROR_DUPLICADO: "Ya existe un registro almacenado con esta información, por favor ingrese uno nuevo",
  ERROR_ACTUALIZAR: "Error, ya existe una denominación con ese valor",
  ERROR_DELETE: "Error al eliminar elemento",
  ERROR_UPDATE: "Error al actualizar elemento",
  ERROR_ID: "Error id no existe",
  ERROR_RANGE_DATE: "Existe un período creado con este rango de fechas",
  ERROR_CHILDREN_PERIODO: "No se puede eliminar este período, ya que tiene solicitudes asignadas",
  ERROR_CHILDREN_DENOMINACION: "No se puede eliminar esta denominación, ya que tiene cupones con este valor",
  ERROR_CONTRATO: "No se puede eliminar este contrato, ya que tiene cupones registratos a este contrato",
  ERROR_APROBAR: "Error al aprobar",
  ERROR_CAMPOS: "Error llene todos los campos",
  ERROR_RECHAZAR: "Error al rechazar",
  ERROR_FECHA: "La fecha de la bitácora debe ser igual o superior a: ",
  ERROR_FECHA_ENTREGA: "La fecha de la bitácora debe ser igual o superior a la fecha de entrega de Cupones. ",
  ERROR_TRASLAPE_KILOMETRAJE: "El kilometraje ingresado se traslapa con el de otra comisión ya registrada",
  ERROR_TRASLAPE_FECHAS: "Las fechas ingresadas tiene un traslape con otra comisión ya registrada",
  ERROR_TRASLAPE_FECHAS_IGUALES: "El período de fechas ingresadas son iguales con otra comisión ya registrada",
  ERROR_DOWNLOAD: "Error al obtener archivo",
  ERROR_GENERAL_SERVICIO: "Error en consumo",
  ERROR_ENTREGA_SIN_DETALLE: "Entrega sin detalle",
  ERROR_CORRELATIVO: "Error al generar correlativo",
  ERROR_NOTIFICATION: "Error al notificar",
  ERROR_ENTREGA_DUPLICIDAD: "No se puede seleccionar esta solicitud, ya tiene una entrega realizada. Busque nuevamente.",
  ERROR_NIT: "NIT ya existe, si desea podrá buscarlo y editarlo."

  //validacion de campos
  ,NO_EXPEDIENTE: "Debe enviar el campo 'no_expediente'"
  ,NO_CARGO_USUARIO: "Debe enviar el campo 'cargo_usuario'"
  ,NO_NOMBRE_USUARIO: "Debe enviar el campo 'nombre_usuario'"
  ,NO_REQUISICION_COMPRA: "Debe enviar el campo 'numeroRequisicionCompra'"
  ,NO_EXPEDIENTE_PAGO: "Debe enviar el campo 'idExpedientePago'",

  FALTA_FIRMADOS: "No todos los archivos han sido firmados ",
  ERROR_UPDATE_MULTIPLE: "No todos los archivos fueron actualizados",

  FIRMAS_FALTANTES: "Se deben Firmar todos los documentos para ser validos ",
  CONSULTA_FIRMA: "No se puede consultar en este momento. ",
  DOCUMENTO_RECHAZADO: "Documento rechazado"


  
};

module.exports.successMessages = {
  SUCCESS_FINDALL: "Elementos encontrados",
  SUCCESS_FIND: "Elemento encontrado",
  SUCCESS_ADD: "Elemento agregado",
  SUCCESS_DELETE: "Elemento eliminado",
  SUCCESS_UPDATE: "Elemento actualizado",
  SUCCESS_APROBAR: "Aprobado",
  SUCCESS_RECHAZAR: "Rechazado",
  SUCCESS_GENERAL_SERVICIO: "Exito en consumo",
  SUCCESS_CORRELATIVO: "Correlativo generado",
  SUCCESS_NOTIFICATION: "Notificacion registrada"
};
